import { createReducer, on } from "@ngrx/store";
import { vehiclesActions } from "./vehicles.actions";
import { Vehicle } from "../../../core/models/vehicles";
import { VehicleBrand } from "../../../core/models/vehicle-brand";
import { VehicleModelName } from "../../../core/models/vehicle-model";

enum Status {
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success'
}

export interface State {
  error: '' | null,
  status: Status
}

export interface VehiclesState extends State {
  vehicles: Vehicle[]
}

export interface VehicleBrandsState extends State {
  vehicleBrands: VehicleBrand[]
}

export interface VehicleModelsState extends State {
  vehicleModels: VehicleModelName[]
}

const vehiclesInitialState: VehiclesState = {
  error: null,
  status: Status.pending,
  vehicles: []
};

const vehicleBrandsState: VehicleBrandsState = {
  error: null,
  status: Status.pending,
  vehicleBrands: []
};

const vehicleModelsState: VehicleModelsState = {
  error: null,
  status: Status.pending,
  vehicleModels: []
};

export const vehiclesReducer = createReducer(
  vehiclesInitialState,
  on(vehiclesActions.loadVehicles, (currentState) => {
    return {
      ...currentState,
      status: Status.loading
    }
  }),
  on(vehiclesActions.loadVehiclesSuccess, (currentState, vehiclesObj) => {
    return {
      ...currentState,
      vehicles: vehiclesObj.vehicles,
      status: Status.success
    }
  }),
);

export const vehicleBrandsReducer = createReducer(
  vehicleBrandsState,
  on(vehiclesActions.loadVehicleBrands, (currentState) => {
    return {
      ...currentState,
      status: Status.loading
    }
  }),
  on(vehiclesActions.loadVehiclesBrandsSuccess, (currentState, vehicleBrandsObj) => {
    return {
      ...currentState,
      vehicleBrands: vehicleBrandsObj.vehicleBrands,
      status: Status.success
    }
  }),
);

export const vehicleModelsReducer = createReducer(
  vehicleModelsState,
  on(vehiclesActions.loadVehicleModels, (currentState) => {
    return {
      ...currentState,
      status: Status.loading
    }
  }),
  on(vehiclesActions.loadVehicleModelsSuccess, (currentState, vehicleModelsObj) => {
    return {
      ...currentState,
      vehicleModels: vehicleModelsObj.vehicleModels,
      status: Status.success
    }
  }),
);
