import { HttpEventType, type HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { notificationStatusActions } from './state/notification-status.actions';
import { Store } from '@ngrx/store';

export const notificationStatusInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  store.dispatch(notificationStatusActions.notificationStatusReset())

  return next(req).pipe(
    tap((event) => {
      if (req.method === 'POST' && event.type === HttpEventType.Response) {
        store.dispatch(notificationStatusActions.notificationStatusSuccess())
      }
    }),
    catchError((error) => {
      store.dispatch(notificationStatusActions.notificationStatusError())
      return throwError(error);
    })
  );
};

