import { createReducer, on } from "@ngrx/store";
import { loadingActions } from "./loading.actions";

enum Status {
  pending = 'pending',
  loading = 'loading',
  success = 'success'
}

export interface LoadingState {
  status: Status
}

const initialState: LoadingState = {
  status: Status.pending
}

export const loadingReducer = createReducer(
  initialState,
  on(loadingActions.loadingStarted, () => {
    return {
      status: Status.loading
    }
  }),
  on(loadingActions.loadingSuccess, () => {
    return {
      status: Status.success
    }
  }),
);