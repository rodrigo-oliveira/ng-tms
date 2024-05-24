export class VehicleModel {
    id = 0;
    brand = '';
    model = '';
    type = '';
    year = 0;
    cargo_capacity_kg = 0;
    average_consumption_km_per_liter = 0;
    fuel_type = '';
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