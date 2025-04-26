import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from '@components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from "./components/signals/signals.component";
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { environment } from 'environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    SignalsComponent,
    PaiOuMaeComponent,
    AngularPipesComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent
],
  template: `
  <h1>APRENDIZADO ANGULAR</h1>
    <!-- <router-outlet></router-outlet> -->
    <!-- <app-new-component /> -->
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!--  <app-template-deferrable-views /> -->
    <!-- <app-signals/> -->
    <!-- <app-pai-ou-mae />> -->
    <!-- <app-angular-pipes /> -->
    <!--  <app-reactive-forms /> -->
    <!-- <app-template-driven-forms /> -->
    <!--
    <app-content>
     <header id="header">
      <p>Header</p>
     </header>

      <p text>Text</p>
      <p text>Text</p>

     <footer class="footer">
      <p>Footer</p>
     </footer>
    </app-content>
 -->
 <!--<app-host-elements /> -->
 <!--
      *******************************************
      // Adicione esses itens dentro do app Component
      *******************************************
      public number = signal(1);
      public boolean = true;

      ngOnInit(): void {
        setInterval(() => {
          this.number.update((oldValue) => {
            return oldValue + 1;
          });
        }, 1000);
      }

      *******************************************
      // Adicione esses itens dentro do HTML
      *******************************************
      @if(boolean){
      <app-life-cycle [inputMyNumber]="number()">
        <p #text>Text</p>
      </app-life-cycle>
      }

      <button (click)="boolean = !boolean">Destroy Component</button>
    -->
  `
})
export class AppComponent {
  constructor() {
    console.log(environment.env); // Exibe 'dev', 'hom' ou 'prod' no console
  }
}

