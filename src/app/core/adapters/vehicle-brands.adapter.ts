import { Injectable } from '@angular/core';
import { ModelAdapter } from '../models/model-adapter';
import { VehicleBrand, VehicleBrandModel } from '../models/vehicle-brand';
import { MarcaVeiculo } from '../models/marcas-veiculos-response';

@Injectable({
  providedIn: 'root'
})
export class VehicleBrandsAdapter implements ModelAdapter<MarcaVeiculo, VehicleBrand> {
  adapt = (marca: MarcaVeiculo): VehicleBrand => 
    Object.assign(new VehicleBrandModel(), {
      id: marca.id,
      brand: marca.marca
    });

  adaptArray = (marcas: MarcaVeiculo[]): VehicleBrand[] => 
    marcas.map(vehicleBrand => this.adapt(vehicleBrand));
}