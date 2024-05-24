import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PoPageModule
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor() { }
}
