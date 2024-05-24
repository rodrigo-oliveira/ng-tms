export class VeiculoModel {
    id: number;
    marca: string;
    modelo: string;
    tipo: string;
    ano: number;
    capacidade_carga_kg: number;
    consumo_medio_km_litro: number;
    combustivel: string;
}

export interface Veiculo {
    id: number;
    marca: string;
    modelo: string;
    tipo: string;
    ano: number;
    capacidade_carga_kg: number;
    consumo_medio_km_litro: number;
    combustivel: string;
}

export interface VeiculosResponse {
    items: Veiculo[]
}