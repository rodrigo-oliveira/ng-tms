import { Injectable } from '@angular/core';
import { ModelAdapter } from '../models/model-adapter';
import { CustomersResponseItem } from '../models/customers-response';
import { CustomerModel, Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CostumersAdapter implements ModelAdapter<CustomersResponseItem, Customer> {
  adapt = (user: CustomersResponseItem): Customer => 
    Object.assign(new CustomerModel(), {
      id: user.id,
      name: user.nome,
      document: user.documento,
      status: user.status ? 'active' : 'disabled',
    });

  adaptArray = (users: CustomersResponseItem[]): Customer[] => 
    users.map(user => this.adapt(user));
}