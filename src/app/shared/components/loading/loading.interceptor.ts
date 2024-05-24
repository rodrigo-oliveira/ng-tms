import { type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadingActions } from './state/loading.actions';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  return next(req).pipe(
    tap(event => {
      return store.dispatch(loadingActions.loadingStarted())
    }),
    finalize(() => {
      return store.dispatch(loadingActions.loadingSuccess());
    })
  );
};

