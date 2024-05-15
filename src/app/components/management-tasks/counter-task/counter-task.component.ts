import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-task',
  templateUrl: './counter-task.component.html',
  styleUrl: './counter-task.component.css',
})
export class CounterTaskComponent {
  @Input()
  TaskStatistique!: any;
}
