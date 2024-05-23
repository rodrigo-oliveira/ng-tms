import { CustomersState } from "../features/customers/state/customers.reducer";
import { LoadingState } from "../shared/components/loading/state/loading.reducer";

export interface AppState {
  customers: CustomersState,
  loading: LoadingState
}