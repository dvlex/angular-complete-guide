import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-task',
  standalone: true,
  imports: [],
  templateUrl: './modal-add-task.component.html',
  styleUrl: './modal-add-task.component.scss'
})
export class ModalAddTaskComponent {
  constructor(public _matDialogRef: MatDialogRef<ModalAddTaskComponent>) {}
}
