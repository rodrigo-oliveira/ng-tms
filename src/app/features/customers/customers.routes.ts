import { Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

export const customerRoutes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./customers-table/customers-table.component').then(
            (m) => m.CustomersTableComponent
          ),
      },
      {
        path: 'novo',
        loadComponent: () =>
          import('./customer/customer.component').then(
            (m) => m.CustomerComponent
          ),
      },
      {
        path: 'editar/:id',
        loadComponent: () =>
          import('./customer/customer.component').then(
            (m) => m.CustomerComponent
          ),
      },
    ],
  },
];
