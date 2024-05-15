import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../core/models/task-response.model';
import { TaskServiceService } from '../../../core/services/task-service.service';
import { TaskStatus } from '../../../core/models/StatutType.enum';

@Component({
  selector: 'app-taks-list',
  templateUrl: './taks-list.component.html',
  styleUrl: './taks-list.component.css',
})
export class TaksListComponent {
  @Input()
  tasks!: Task[];
  @Output()
  taskRemoveEvent = new EventEmitter();
  @Output()
  taskChangeEvent = new EventEmitter();
  @Output()
  taskUpdateEvent: EventEmitter<Task> = new EventEmitter();
  statutType = Object.values(TaskStatus);
  @Output()
  taskChangeEvents: EventEmitter<null> = new EventEmitter();

  constructor(private TaskService: TaskServiceService) {}

  remove(id: number) {
    this.TaskService.removeTask(id).subscribe((response) => {
      if (response.statut === 204) {
        this.taskRemoveEvent.emit();
      }
    });
  }

  updateTask(task: Task) {
    this.taskUpdateEvent.emit(task);
  }

  changeStatut(statut: string, id: number) {
    this.TaskService.changeStatut({ status: statut }, id).subscribe(
      (response) => {
        if (response.statut === 200) {
          this.taskChangeEvents.emit();
        }
      }
    );
  }
}
