export interface MarcaVeiculo {
    id: number;
    marca: string;
}

export interface MarcasVeiculosResponse {
    items: MarcaVeiculo[]
}