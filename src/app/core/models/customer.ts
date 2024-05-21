
export class Customer {
    id: string = '';
    name: string = '';
    document: string = '';
    status: string = 'desativado';
}

export interface ICustomer {
    id: string;
    name: string;
    document: string;
    status: string;
}