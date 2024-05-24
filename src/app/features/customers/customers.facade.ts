import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerId } from '../../core/models/customer';
import { Store } from '@ngrx/store';
import { customersSelector, selectCustomerById } from './state/customers.selectors';
import { customersActions } from './state/customers.actions';
import { CustomersService } from '../../core/services/customers.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersFacade {
    private store = inject(Store);
    private customersService = inject(CustomersService);

    get customers$(): Observable<Customer[]> {
      return this.store.select(customersSelector);
    }

    getCustomerById(id:string): Observable<Customer> {
      return this.store.select(selectCustomerById(id));
    }

    loadCustomers() {
      this.store.dispatch(customersActions.loadCustomers());
    }

    postCustomer(payload: Customer) {
      return this.customersService.postCustomer(payload);
    }

    deleteCustomer(payload: CustomerId) {
      return this.customersService.deleteVehicle(payload);
    }
}