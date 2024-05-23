import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../core/models/customer';

const loadCustomers = createAction('[Customers] Load customers');
const loadCustomersSuccess = createAction(
    '[Customer] Load customers success', props<{ customers: Customer[] }>())

export const customersActions = {
    loadCustomers,
    loadCustomersSuccess
}