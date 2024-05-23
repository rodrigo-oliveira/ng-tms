import { Injectable } from '@angular/core';
import { CostumersAdapter } from '../adapters/customers-adapter';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomersResponse } from '../models/customers-response';
import { CUSTOMERS_API } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
    constructor(
        private http: HttpClient,
        private costumersAdapter: CostumersAdapter,
    ) { }

    getAll(): Observable<Customer[]> {
        return this.http.get<CustomersResponse>(CUSTOMERS_API).pipe(
            map((user) => this.costumersAdapter.adaptArray(user.items))
        );
    }
}