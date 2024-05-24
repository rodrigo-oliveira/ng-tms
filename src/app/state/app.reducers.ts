import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { customersReducer } from "../features/customers/state/customers.reducer";
import { loadingReducer } from "../shared/components/loading/state/loading.reducer";
import { vehicleBrandsReducer, vehicleModelsReducer, vehiclesReducer } from "../features/vehicles/state/vehicles.reducer";
import { notificationStatusReducer } from "../shared/components/notification-status/state/notification-status.reducer";

export const appReducers: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  notificationStatus: notificationStatusReducer,
  customers: customersReducer,
  vehicles: vehiclesReducer,
  vehicleBrands: vehicleBrandsReducer,
  vehicleModels: vehicleModelsReducer
}