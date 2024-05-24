import { createSelector } from "@ngrx/store";
import { AppState } from "../../../state/app.state";
import { Vehicle, VehicleModel } from "../../../core/models/vehicles";

export const vehiclesSelector = (appState: AppState) => appState.vehicles.vehicles;

export const selectVehicleById = (vehicleId: number) =>
    createSelector(
      vehiclesSelector, 
      (vehicles: Vehicle[]) => vehicles.find(vehicle => vehicle.id === vehicleId) || new VehicleModel()
    )

export const vehicleBrandsSelector = (appState: AppState) => appState.vehicleBrands.vehicleBrands;
export const vehicleModelsSelector = (appState: AppState) => appState.vehicleModels.vehicleModels;
