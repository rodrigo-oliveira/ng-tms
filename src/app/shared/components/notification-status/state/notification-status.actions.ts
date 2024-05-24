import { createAction } from '@ngrx/store';

const notificationStatusReset = createAction('[Loading] Notification status reset');
const notificationStatusError = createAction('[Loading] Notification status error');
const notificationStatusSuccess = createAction('[Loading] Notification status success')

export const notificationStatusActions = {
    notificationStatusReset,
    notificationStatusError,
    notificationStatusSuccess
}