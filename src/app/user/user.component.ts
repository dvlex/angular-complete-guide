import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<User>();
  // select = output<User>(); 
  /* This is the same as the line above, is used when we use input
  and output decorators. */


  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user);
  }
}
