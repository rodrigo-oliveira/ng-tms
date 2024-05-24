import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../../../core/models/vehicles';
import { VehicleBrand } from '../../../core/models/vehicle-brand';
import { VehicleModelName } from '../../../core/models/vehicle-model';

const loadVehicles = createAction('[Vehicles] Load vehicles');
const loadVehiclesSuccess = createAction('[Vehicles] Load vehicles success', props<{ vehicles: Vehicle[] }>())
const loadVehicleBrands = createAction('[Vehicles brands] Load vehicles brands');
const loadVehiclesBrandsSuccess = createAction('[Vehicles brands] Load vehicles brands success', props<{ vehicleBrands: VehicleBrand[] }>())
const loadVehicleModels = createAction('[Vehicles models] Load vehicles models');
const loadVehicleModelsSuccess = createAction('[Vehicles models] Load vehicles models success', props<{ vehicleModels: VehicleModelName[] }>())

export const vehiclesActions = {
    loadVehicles,
    loadVehiclesSuccess,
    loadVehicleBrands,
    loadVehiclesBrandsSuccess,
    loadVehicleModels,
    loadVehicleModelsSuccess
}