import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    CommonModule,
    PoPageModule
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

  constructor() { }
}
