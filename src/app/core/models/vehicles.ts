export class VehicleModel {
    id: number;
    brand: string;
    model: string;
    type: string;
    year: number;
    cargo_capacity_kg: number;
    average_consumption_km_per_liter: number;
    fuel_type: string;
}

export interface Vehicle {
    id: number;
    brand: string;
    model: string;
    type: string;
    year: number;
    cargo_capacity_kg: number;
    average_consumption_km_per_liter: number;
    fuel_type: string;
}