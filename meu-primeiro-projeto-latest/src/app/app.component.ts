import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent],
  template:`<router-outlet></router-outlet>
<h1>aaaaa</h1>
<div class="theme-red">
  <app-new-component />
</div>
`,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}


