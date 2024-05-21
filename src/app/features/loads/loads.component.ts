import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loads',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './loads.component.html',
  styleUrl: './loads.component.scss'
})
export class LoadsComponent {

  constructor() { }
}
