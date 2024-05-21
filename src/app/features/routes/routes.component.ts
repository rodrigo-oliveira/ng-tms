import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [
    CommonModule,
    PoPageModule
  ],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

  constructor() { }
}
