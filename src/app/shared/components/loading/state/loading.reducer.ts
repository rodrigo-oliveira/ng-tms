import { createReducer, on } from "@ngrx/store";
import { loadingActions } from "./loading.actions";

enum Status {
  loading = 'loading',
  success = 'success'
}

export interface LoadingState {
  status: Status
}

const initialState: LoadingState = {
  status: Status.loading
}

export const loadingReducer = createReducer(
  initialState,
  on(loadingActions.loadingStarted, () => {
    return {
      status: Status.loading
    }
  }),
  on(loadingActions.loadingSucess, () => {
    return {
      status: Status.success
    }
  }),
);