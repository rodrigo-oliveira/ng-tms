import { type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LoadingStoreService } from '../store/loading-store.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingStoreService = inject(LoadingStoreService);

  return next(req).pipe(
    tap(event => {
      loadingStoreService.show();
    }),
    finalize(() => {
      loadingStoreService.hide();
    })
  );
};

