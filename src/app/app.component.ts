import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    UserComponent, 
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(user: User) {
    console.log('User selected', user);
  }
}
