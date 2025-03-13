import { Component, computed, input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();

  imagePath = computed(() => {
    return `assets/users/${this.user().avatar}`;
  });

  onSelectUser() {

  }
}
