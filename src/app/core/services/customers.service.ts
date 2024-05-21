import { Injectable } from '@angular/core';
import { UserAdapter } from '../adapters/customers-adapter';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICustomer } from '../models/customer';
import { CustomerResponse, CustomersResponse } from '../models/customers-response';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
    constructor(
        private http: HttpClient,
        private userAdapter: UserAdapter,
    ) { }
    
    
    get(id: string): Observable<ICustomer> {
        return this.http.get<CustomerResponse>(`http://localhost:3000/clientes/${id}`).pipe(
            map(this.userAdapter.adapt)
        );
    }

    getAll(): Observable<ICustomer[]> {
        return this.http.get<CustomersResponse>(`http://localhost:3000/clientes`).pipe(
            map((user) => this.userAdapter.adaptArray(user.items))
        );
    }
}