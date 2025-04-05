import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit{

  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameH2!: ElementRef;
  @ViewChild('h1') public h1!: ElementRef<HTMLHeadingElement>;
  @ViewChild('NewComponent') public childComponent!: NewComponent;

  ngAfterViewInit(): void{
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.childComponent.name);
  }

}
