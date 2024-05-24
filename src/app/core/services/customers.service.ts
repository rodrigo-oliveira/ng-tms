import { Injectable } from '@angular/core';
import { CostumersAdapter } from '../adapters/customers.adapter';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Customer, CustomerId } from '../models/customer';
import { Cliente, ClientesResponse } from '../models/clientes-response';
import { CUSTOMERS_API, CUSTOMERS_DELETE_API, CUSTOMERS_SEND_API } from '../constants/api.constant';

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

    postCustomer(payload: Customer) {
        const customerPayload = this.costumersAdapter.adaptToPost(payload);

        return this.http.post<Cliente>(CUSTOMERS_SEND_API, customerPayload);
    }

    deleteCustomer(payload: CustomerId) {
        return this.http.post<CustomerId>(CUSTOMERS_DELETE_API, payload);
    }
}