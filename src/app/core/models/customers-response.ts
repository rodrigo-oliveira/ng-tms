export interface CustomerResponse {
    id: string;
    nome: string;
    documento: string;
    status: boolean;
};

export interface CustomersResponse {
    items: CustomerResponse[]
};