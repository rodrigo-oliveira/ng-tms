import { createReducer, on } from "@ngrx/store";
import { customersActions } from "./customers.actions";
import { Customer, CustomerModel } from "../../../core/models/customer";

enum Status {
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success'
}

export interface CustomersState {
  customers: Customer[],
  error: '' | null,
  status: Status
}

const initialState: CustomersState = {
  error: null,
  status: Status.pending,
  customers: []
}

export const customersReducer = createReducer(
  initialState,
  on(customersActions.loadCustomers, (currentState) => {
    return {
      ...currentState,
      status: Status.loading
    }
  }),
  on(customersActions.loadCustomersSuccess, (currentState, customersObj) => {
    return {
      ...currentState,
      customers: customersObj.customers,
      status: Status.success
    }
  }),
);