import { ModelosVeiculosResponse } from '../models/modelos-veiculos-response';
import { VehicleModelNameModel } from '../models/vehicle-model';

export const modelosVeiculosMockData: ModelosVeiculosResponse = {
  "items": [
    {
      "id": 1,
      "modelo": "Hilux"
    },
    {
      "id": 2,
      "modelo": "Transit"
    }
  ]
};

export const vehicleModelMockData = new VehicleModelNameModel();
export const modeloVeiculoMockData = modelosVeiculosMockData.items[0];