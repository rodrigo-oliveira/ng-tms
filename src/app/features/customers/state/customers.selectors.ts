import { createSelector } from "@ngrx/store";
import { AppState } from "../../../state/app.state";
import { Customer, CustomerModel } from "../../../core/models/customer";

export const customersSelector = (appState: AppState) => appState.customers.customers;

export const selectCustomerById = (customerId: string) =>
    createSelector(
      customersSelector, 
      (customers: Customer[]) => customers.find(c => c.id === customerId) || new CustomerModel()
    )