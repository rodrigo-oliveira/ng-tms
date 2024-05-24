import { createReducer, on } from "@ngrx/store";
import { notificationStatusActions } from "./notification-status.actions";

export enum NotificationStatus {
  default = 'default',
  error = 'error',
  success = 'success'
}

export interface NotificationStatusState {
  status: NotificationStatus
}

const initialState: NotificationStatusState = {
  status: NotificationStatus.default
}

export const notificationStatusReducer = createReducer(
  initialState,
  on(notificationStatusActions.notificationStatusReset, () => {
    return {
      status: NotificationStatus.default
    }
  }),
  on(notificationStatusActions.notificationStatusError, () => {
    return {
      status: NotificationStatus.error
    }
  }),
  on(notificationStatusActions.notificationStatusSuccess, () => {
    return {
      status: NotificationStatus.success
    }
  }),
);