import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./features/customers/customers.routes').then(
        (m) => m.customerRoutes
    )
  },
  {
    path: 'veiculos',
    loadComponent: () =>
      import('./features/vehicles/vehicles.component').then(
        (m) => m.VehiclesComponent
      ),
  },
  {
    path: 'locais',
    loadComponent: () =>
      import('./features/locations/locations.component').then(
        (m) => m.LocationsComponent
      ),
  },
  {
    path: 'rotas',
    loadComponent: () =>
      import('./features/routes/routes.component').then(
        (m) => m.RoutesComponent
      ),
  },
  {
    path: 'cargas',
    loadComponent: () =>
      import('./features/loads/loads.component').then((m) => m.LoadsComponent),
  },
];
