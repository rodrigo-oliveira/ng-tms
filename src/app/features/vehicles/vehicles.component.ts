import { Component, inject } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { VehiclesFacade } from './vehicles.facade';
import { VehiclesTableComponent } from './vehicles-table/vehicles-table.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    PoPageModule,
    RouterOutlet,
    VehiclesTableComponent
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {
  vehiclesFacade = inject(VehiclesFacade);

  ngOnInit(): void {
    this.vehiclesFacade.loadVehicles()
  }
}
