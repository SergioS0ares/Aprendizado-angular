import { Component, signal ,LOCALE_ID} from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Observable, delay, of } from 'rxjs';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CustomStringPipe } from '../../../pipes/custom-pipes.pipe';
registerLocaleData(localePt);

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe,  PercentPipe, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AngularPipesComponent {
  public date = signal(new Date());
  public json = signal({ name: 'Dener Troquatte' });

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000));
}
