import { Injectable } from '@angular/core';
import { ModelAdapter } from '../models/model-adapter';
import { Veiculo, VeiculosResponse } from '../models/veiculos-response';
import { Vehicle, VehicleModel } from '../models/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesAdapter implements ModelAdapter<Veiculo, Vehicle> {
  adapt = (veiculo: Veiculo): Vehicle => 
    Object.assign(new VehicleModel(), {
      id: veiculo.id,
      brand: veiculo.marca,
      model: veiculo.modelo,
      type: veiculo.tipo,
      year: veiculo.ano,
      cargo_capacity_kg: veiculo.capacidade_carga_kg,
      average_consumption_km_per_liter: veiculo.consumo_medio_km_litro,
      fuel_type: veiculo.combustivel
    });

  adaptArray = (veiculos: Veiculo[]): Vehicle[] => 
    veiculos.map(vehicle => this.adapt(vehicle));
}