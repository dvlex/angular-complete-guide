import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex]; // without signal
  selectedUser = signal(DUMMY_USERS[randomIndex]); // with signal
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // with signal

  /*get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar; // without signal
  }*/

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex]; // without signal
    this.selectedUser.set(DUMMY_USERS[randomIndex]); // with signal
  }
}
