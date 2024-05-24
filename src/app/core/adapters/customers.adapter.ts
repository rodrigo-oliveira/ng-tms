import { Injectable } from '@angular/core';
import { ModelAdapter } from '../models/model-adapter';
import { Cliente, ClienteModel } from '../models/clientes-response';
import { CustomerModel, Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CostumersAdapter implements ModelAdapter<Cliente, Customer> {
  adapt = (cliente: Cliente): Customer => 
    Object.assign(new CustomerModel(), {
      id: cliente.id,
      name: cliente.nome,
      document: cliente.documento,
      status: cliente.status ? 'active' : 'disabled',
    });

  adaptToPost = (customer: Customer): Cliente => 
    Object.assign(new ClienteModel(), {
      id: customer.id,
      nome: customer.name,
      documento: customer.document,
      status: customer.status === 'active',
    });

  adaptArray = (clientes: Cliente[]): Customer[] => 
    clientes.map(cliente => this.adapt(cliente));
}