import { Component, computed, Input, input } from '@angular/core';
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

  get imagePath() {
    return `assets/users${this.user.avatar}`;
  }

  onSelectUser() {

  }
}
