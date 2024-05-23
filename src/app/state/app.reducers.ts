import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { customersReducer } from "../features/customers/state/customers.reducer";
import { loadingReducer } from "../shared/components/loading/state/loading.reducer";

export const appReducers: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  customers: customersReducer
}