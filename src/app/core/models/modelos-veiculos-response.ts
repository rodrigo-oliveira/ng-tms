export interface ModeloVeiculo {
    id: number;
    modelo: string;
}

export interface ModelosVeiculosResponse {
    items: ModeloVeiculo[]
}