import { Component } from '@angular/core';
import {
  CommonModule,
  AsyncPipe,
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public switchCondition = 'A';

  public items: Array<{ name: string }> = [
    { name: 'Sérgio Soares' }
  ];

  public loadingData$: Observable<string[]> = of([
    'Item 1',
    'Item 2',
    'Item 3'
  ]).pipe(delay(1000));

  public trackByFn(index: number): number {
    return index;
  }

  public addNewName(value: string): void {
    this.items.push({ name: value });
  }
}
