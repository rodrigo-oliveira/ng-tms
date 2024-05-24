import { Injectable } from '@angular/core';
import { CostumersAdapter } from '../adapters/customers.adapter';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Customer } from '../models/customer';
import { Cliente, ClientesResponse } from '../models/clientes-response';
import { CUSTOMERS_API, CUSTOMERS_SEND_API } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
    constructor(
        private http: HttpClient,
        private costumersAdapter: CostumersAdapter,
    ) { }

    getAll(): Observable<Customer[]> {
        return this.http.get<ClientesResponse>(CUSTOMERS_API).pipe(
            map((user) => this.costumersAdapter.adaptArray(user.items))
        );
    }

    postCustomer(customerPayload: Customer) {
        const payload = this.costumersAdapter.adaptToPost(customerPayload);

        return this.http.post<Cliente>(CUSTOMERS_SEND_API, payload);
    }
}