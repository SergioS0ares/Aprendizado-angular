import { Component } from '@angular/core';
import { CommonModule, AsyncPipe, NgIf, NgFor } from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIf, NgFor],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public items = [
    { name: 'Sérgio Soares' },
    { name: 'João' }
  ];

  public loadingData$: Observable<string[]> = of([
    'Item 1',
    'Item 2',
    'Item 3',
  ]).pipe(delay(1000));

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    this.items.push({ name: value });
  }
}
