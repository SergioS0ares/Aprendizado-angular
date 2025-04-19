import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { LOCALE_ID} from '@angular/core';
import { provideRouter } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
