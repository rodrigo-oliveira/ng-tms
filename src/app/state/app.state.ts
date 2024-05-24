import { CustomersState } from "../features/customers/state/customers.reducer";
import { VehicleBrandsState, VehicleModelsState, VehiclesState } from "../features/vehicles/state/vehicles.reducer";
import { LoadingState } from "../shared/components/loading/state/loading.reducer";

export interface AppState {
  loading: LoadingState,
  customers: CustomersState,
  vehicles: VehiclesState,
  vehicleBrands: VehicleBrandsState,
  vehicleModels: VehicleModelsState
}