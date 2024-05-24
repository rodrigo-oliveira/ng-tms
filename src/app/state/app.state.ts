import { CustomersState } from "../features/customers/state/customers.reducer";
import { VehicleBrandsState, VehicleModelsState, VehiclesState } from "../features/vehicles/state/vehicles.reducer";
import { LoadingState } from "../shared/components/loading/state/loading.reducer";
import { NotificationStatusState } from "../shared/components/notification-status/state/notification-status.reducer";

export interface AppState {
  loading: LoadingState,
  notificationStatus: NotificationStatusState,
  customers: CustomersState,
  vehicles: VehiclesState,
  vehicleBrands: VehicleBrandsState,
  vehicleModels: VehicleModelsState
}