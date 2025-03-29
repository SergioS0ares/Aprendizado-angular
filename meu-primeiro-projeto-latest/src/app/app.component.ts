import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template:`<router-outlet></router-outlet>
<h1>APRENDIZADO ANGULAR</h1>
<div class="theme-red">
  <app-new-component />
</div>
<app-template-binding />

<app-template-variables />
`,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
  
}


