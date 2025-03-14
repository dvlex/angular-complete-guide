import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) user!: User; 
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }
  
}
