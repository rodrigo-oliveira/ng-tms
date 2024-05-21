import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-loads',
  standalone: true,
  imports: [
    CommonModule,
    PoPageModule
  ],
  templateUrl: './loads.component.html',
  styleUrl: './loads.component.scss'
})
export class LoadsComponent {

  constructor() { }
}
