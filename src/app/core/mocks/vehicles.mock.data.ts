import { VehicleModel } from '../models/vehicles';
import { VeiculoModel, VeiculosResponse } from '../models/veiculos-response';

export const veiculosMockData: VeiculosResponse = {
  "items": [
    {
      "id": 1,
      "marca": "Toyota",
      "modelo": "Hilux",
      "tipo": "Caminhonete",
      "ano": 2022,
      "capacidade_carga_kg": 1000,
      "consumo_medio_km_litro": 10,
      "combustivel": "Diesel"
    }
  ]
};

export const vehicleMockData = new VehicleModel();
export const veiculoMockData = new VeiculoModel();