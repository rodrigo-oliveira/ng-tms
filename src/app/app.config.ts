import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule, PoHttpRequestModule, HttpClientModule]),
    provideHttpClient(
      withInterceptors([loadingInterceptor])
    )
  ],
  
};