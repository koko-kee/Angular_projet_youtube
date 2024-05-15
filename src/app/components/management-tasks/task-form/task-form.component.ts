import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskServiceService } from '../../../core/services/task-service.service';
import { Task } from '../../../core/models/task-response.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnChanges {
  @Output() newTaskEvent = new EventEmitter();
  @Output() updateTaskEvent = new EventEmitter();
  @Input() task!: Task;

  taskForm = new FormGroup({
    title: new FormControl(''),
    slug: new FormControl(''),
    status: new FormControl(''),
    description: new FormControl(''),
    deadline: new FormControl(''),
  });

  constructor(private TaskService: TaskServiceService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && changes['task'].currentValue) {
      const task = changes['task'].currentValue;
      this.taskForm.patchValue(task);
    }
  }

  createNewTask() {
    if (this.task != undefined) {
      this.TaskService.updateTask(this.taskForm.value, this.task.id).subscribe(
        (response) => {
          if (response.statut === 200) {
            this.taskForm.reset();
            console.log(response.data);
            this.newTaskEvent.emit();
          }
        }
      );
    } else {
      this.TaskService.createTask(this.taskForm.value).subscribe((response) => {
        if (response.statut === 201) {
          this.taskForm.reset();
          console.log(response.data);
          this.newTaskEvent.emit();
        }
      });
    }
  }
}
