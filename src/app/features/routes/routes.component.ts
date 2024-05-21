import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

  constructor() { }
}
