import { createAction } from '@ngrx/store';

const loadingStarted = createAction('[Loading] Loading started');
const loadingSucess = createAction('[Loading] Loading sucess')

export const loadingActions = {
    loadingStarted,
    loadingSucess
}