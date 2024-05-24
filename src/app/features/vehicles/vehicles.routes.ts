import { Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';

export const vehiclesRoutes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./vehicles-table/vehicles-table.component').then(
            (m) => m.VehiclesTableComponent
          ),
      },
      {
        path: 'novo',
        loadComponent: () =>
          import('./vehicle/vehicle.component').then(
            (m) => m.VehicleComponent
          ),
      },
      {
        path: 'editar/:id',
        loadComponent: () =>
          import('./vehicle/vehicle.component').then(
            (m) => m.VehicleComponent
          ),
      },
    ],
  },
];
