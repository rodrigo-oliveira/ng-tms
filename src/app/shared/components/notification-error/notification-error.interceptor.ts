import { type HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { NotificationErrorStore } from './notification-error.store';
import { inject } from '@angular/core';

export const notificationErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationErrorStore = inject(NotificationErrorStore);

  return next(req).pipe(
    tap(event => {
      return {};
    }),
    catchError((error) => {
      notificationErrorStore.showError$.next(true);
      return throwError(error);
    })
  );
};

