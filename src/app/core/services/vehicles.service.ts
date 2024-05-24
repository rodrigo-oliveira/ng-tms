import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { VEHICLES_API } from '../constants/api.constant';
import { VehiclesAdapter } from '../adapters/vehicles.adapter';
import { VeiculosResponse } from '../models/veiculos-response';
import { Vehicle } from '../models/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
    constructor(
        private http: HttpClient,
        private vehiclesAdapter: VehiclesAdapter,
    ) { }

    getAll(): Observable<Vehicle[]> {
        return this.http.get<VeiculosResponse>(VEHICLES_API).pipe(
            map((user) => this.vehiclesAdapter.adaptArray(user.items))
        );
    }
}