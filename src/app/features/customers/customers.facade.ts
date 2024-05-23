import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../core/models/customer';
import { Store } from '@ngrx/store';
import { customersSelector, selectCustomerById } from './state/customers.selectors';
import { customersActions } from './state/customers.actions';

@Injectable({
  providedIn: 'root'
})
export class CustomersFacade {
    private store = inject(Store);
  
    get customers$(): Observable<Customer[]> {
      return this.store.select(customersSelector);
    }

    getCustomerById(id:string): Observable<Customer> {
      return this.store.select(selectCustomerById(id));
    }

    loadCustomers() {
      this.store.dispatch(customersActions.loadCustomers());
    }
}