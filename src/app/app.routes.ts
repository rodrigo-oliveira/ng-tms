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
    loadChildren: () =>
      import('./features/vehicles/vehicles.routes').then(
        (m) => m.vehiclesRoutes
    )
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
