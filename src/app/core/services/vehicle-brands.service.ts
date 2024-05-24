import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { VEHICLES_BRANDS_API } from '../constants/api.constant';
import { VehicleBrandsAdapter } from '../adapters/vehicle-brands.adapter';
import { MarcasVeiculosResponse } from '../models/marcas-veiculos-response';

@Injectable({
  providedIn: 'root'
})
export class VehicleBrandsService {
    constructor(
        private http: HttpClient,
        private vehicleBrandsAdapter: VehicleBrandsAdapter,
    ) { }

    getAll() {
        return this.http.get<MarcasVeiculosResponse>(VEHICLES_BRANDS_API).pipe(
            map((vehicleBrands) => this.vehicleBrandsAdapter.adaptArray(vehicleBrands.items))
        );
    }
}