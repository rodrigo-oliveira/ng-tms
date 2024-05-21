import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CustomersComponent } from './features/customers/customers.component';
import { VehiclesComponent } from './features/vehicles/vehicles.component';
import { LocationsComponent } from './features/locations/locations.component';
import { LoadsComponent } from './features/loads/loads.component';
import { RoutesComponent } from './features/routes/routes.component';
import { CustomerComponent } from './features/customers/customer/customer.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: CustomersComponent },
    { path: 'clientes/novo', component: CustomerComponent },
    { path: 'clientes/editar/:id', component: CustomerComponent },
    { path: 'veiculos', component: VehiclesComponent },
    { path: 'locais', component: LocationsComponent },
    { path: 'rotas', component: RoutesComponent },
    { path: 'cargas', component: LoadsComponent },
];
