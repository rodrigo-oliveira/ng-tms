import { Injectable } from '@angular/core';
import { ModelAdapter } from '../models/model-adapter';
import { ModeloVeiculo } from '../models/modelos-veiculos-response';
import { VehicleModelName, VehicleModelNameModel } from '../models/vehicle-model';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelsAdapter implements ModelAdapter<ModeloVeiculo, VehicleModelName> {
  adapt = (marca: ModeloVeiculo): VehicleModelName => 
    Object.assign(new VehicleModelNameModel(), {
      id: marca.id,
      model: marca.modelo
    });

  adaptArray = (marcas: ModeloVeiculo[]): VehicleModelName[] => 
    marcas.map(vehicleModel => this.adapt(vehicleModel));
}