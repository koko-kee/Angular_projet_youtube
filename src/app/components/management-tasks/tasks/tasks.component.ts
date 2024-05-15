import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../core/services/auth-service.service';
import { Task } from '../../../core/models/task-response.model';
import { TaskServiceService } from '../../../core/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  tasks!: Task[];
  task!: Task;
  statistique!: any;

  constructor(
    private authService: AuthServiceService,
    private taskService: TaskServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTask();
  }

  getTasks() {
    this.taskService.getAllTasks().subscribe((response) => {
      if (response.statut === 200) {
        this.tasks = response.data;
        console.log(response.data);
      }
    });
    this.getStatistique();
  }

  loadTask() {
    this.getTasks();
  }

  logoutApp() {
    this.authService.logout().subscribe((response) => {
      if (response) {
        localStorage.removeItem('token');
        localStorage.clear();
        this.router.navigate(['/login']);
      } else {
        console.log('jjj');
      }
    });
  }

  updateTask(task: Task) {
    this.task = task;
    console.log(task);
  }

  getStatistique() {
    this.taskService.getStatistique().subscribe((response) => {
      if (response.statut === 200) {
        console.log(response.data);
        this.statistique = response.data;
      }
    });
  }
}
