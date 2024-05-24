import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    PoPageModule,
  ],
  templateUrl: './locations.component.html'
})
export class LocationsComponent {

  constructor() { }
}
