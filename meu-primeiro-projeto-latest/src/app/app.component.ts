import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent],
  template:`<router-outlet></router-outlet>
<h1>APRENDIZADO ANGULAR</h1>
<div class="theme-red">
  <app-new-component />
</div>
<app-template-binding />
`,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}


