import { Injectable } from '@angular/core';
import { ModelAdapter } from '../models/model-adapter';
import { CustomerResponse } from '../models/customers-response';
import { Customer, ICustomer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class UserAdapter implements ModelAdapter<CustomerResponse, ICustomer> {
  adapt = (user: CustomerResponse): ICustomer => 
    Object.assign(new Customer(), {
      id: user.id,
      name: user.nome,
      document: user.documento,
      status: user.status ? 'active' : 'disabled',
    });

  adaptArray = (users: CustomerResponse[]): ICustomer[] => 
    users.map(user => this.adapt(user));
}