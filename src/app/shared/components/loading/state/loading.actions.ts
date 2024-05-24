import { createAction } from '@ngrx/store';

const loadingStarted = createAction('[Loading] Loading started');
const loadingSuccess = createAction('[Loading] Loading success')

export const loadingActions = {
    loadingStarted,
    loadingSuccess
}