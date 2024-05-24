import { MarcasVeiculosResponse } from '../models/marcas-veiculos-response';
import { VehicleBrandModel } from '../models/vehicle-brand';

export const marcasVeiculosMockData: MarcasVeiculosResponse = {
  "items": [
    {
      "id": 1,
      "marca": "Toyota"
    },
    {
      "id": 2,
      "marca": "Ford"
    }
  ]
};

export const vehicleBrandMockData = new VehicleBrandModel();
export const marcaVeiculoMockData = marcasVeiculosMockData.items[0];