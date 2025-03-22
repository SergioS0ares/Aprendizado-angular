import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
public name: string = 'Sergio';
public age: number = 21;
public isDisabled = true;
public scrValue = 'https://th.bing.com/th/id/OIP.eBV6NKOwkJSZXDufD45I3wHaE8?rs=1&pid=ImgDetMain'

public sum(val1:number, val2: number){
  return val1 + val2;
}

constructor() {
  setTimeout(() => {
    this.name = 'João e Maria';
  }, 1000);
}

}
