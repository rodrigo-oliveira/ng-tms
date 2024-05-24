export type StatusType = 'active' | 'disabled';

export class CustomerModel {
    id: string = '';
    name: string = '';
    document: string = '';
    status: StatusType = 'disabled';
}

export interface Customer {
    id: string;
    name: string;
    document: string;
    status: string;
}

export interface CustomerId {
    id: string
}