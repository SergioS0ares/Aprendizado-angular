import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-template-binding',
  imports: [FormsModule, CommonModule, NgClass,],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
public name: string = 'Sergio';
public age: number = 21;
public isDisabled = true;
public scrValue = 'https://th.bing.com/th/id/OIP.eBV6NKOwkJSZXDufD45I3wHaE8?rs=1&pid=ImgDetMain'

public condition = this.age > 1 ? 'Teste' : 'Teste2';

public sum(val1:number, val2: number){
  return val1 + val2;
}

constructor() {
  setTimeout(() => {
    this.name = 'João e Maria';
  }, 1000);
}

public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

public sumAge(){
  return this.age++;
}
public subAge(){
  return this.age--;
}

public onKeyDown(event: Event){
  return console.log(event);
}

public onMouseMove(event: any){
  return console.log({
    clietX: event.clietX,
    clietY: event.clietY,
  });
}


}
