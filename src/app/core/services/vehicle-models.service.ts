import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { VEHICLES_MODELS_API } from '../constants/api.constant';
import { VehicleModelsAdapter } from '../adapters/vehicle-models.adapter';
import { ModelosVeiculosResponse } from '../models/modelos-veiculos-response';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelsService {
    constructor(
        private http: HttpClient,
        private vehicleModelsAdapter: VehicleModelsAdapter,
    ) { }

    getAll() {
        return this.http.get<ModelosVeiculosResponse>(VEHICLES_MODELS_API).pipe(
            map((vehicleModels) => this.vehicleModelsAdapter.adaptArray(vehicleModels.items))
        );
    }
}