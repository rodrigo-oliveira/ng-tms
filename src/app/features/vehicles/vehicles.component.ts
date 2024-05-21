import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    CommonModule,
    PoPageModule
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {

  constructor() { }
}
