import { ClienteModel, ClientesResponse } from '../models/clientes-response';
import { CustomerModel } from '../models/customer';

export const clientesMockData: ClientesResponse = {
  "items": [
    {
        "id": "0148093543698",
        "nome": "Ronaldo Nascimento Filho",
        "documento": "12345678909",
        "status": false
    },
    {
      "id": "0158093543699",
      "nome": "Alberto Souza Oliveira",
      "documento": "12345678909",
      "status": true
    },
    {
      "id": "0168093543622",
      "nome": "Diogo Costa Santos",
      "documento": "12345678909",
      "status": true
    }
  ]
};

export const customerMockData = new CustomerModel();
export const clienteMockData = new ClienteModel();