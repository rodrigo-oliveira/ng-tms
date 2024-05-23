import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { loadingInterceptor } from './shared/components/loading/loading.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appReducers } from './state/app.reducers';
import { loadCustomersEffect } from './features/customers/state/customers.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule, PoHttpRequestModule, HttpClientModule]),
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideStore(appReducers),
    provideEffects({ loadCustomersEffect })
],
  
};