import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
registerLocaleData(localePt);

import { routes } from './app.routes';
import { httpInterceptor } from './interceptor/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withInterceptors([httpInterceptor])),]
};
