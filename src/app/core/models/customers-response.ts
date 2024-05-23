export interface CustomersResponseItem {
    id: string;
    nome: string;
    documento: string;
    status: boolean;
}

export interface CustomersResponse {
    items: CustomersResponseItem[]
}