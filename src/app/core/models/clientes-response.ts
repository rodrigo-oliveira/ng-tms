export class ClienteModel {
    id: string;
    nome: string;
    documento: string;
    status: boolean;
}

export interface Cliente {
    id: string;
    nome: string;
    documento: string;
    status: boolean;
}

export interface ClientesResponse {
    items: Cliente[]
}