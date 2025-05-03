# Aprendizado-angular

Repositório com meus estudos e experimentos em Angular, incluindo exemplos práticos e boas práticas do framework.

## Sumário

1. [Configuração Inicial](#configuração-inicial)
2. [Componentes](#componentes)
3. [Estilos e SCSS](#estilos-e-scss)
4. [Template HTML e Bindings](#template-html-e-bindings)
5. [Control Flow](#control-flow)
6. [Deferrable Views](#deferrable-views)
7. [Signals](#signals)
8. [Comunicação entre Componentes](#comunicação-entre-componentes)
9. [Pipes](#pipes)
10. [Formulários Template-driven](#formulários-template-driven)
11. [Reactive Forms](#reactive-forms)
12. [Host Elements](#host-elements)
13. [Ciclo de Vida dos Componentes](#ciclo-de-vida-dos-componentes)
14. [Melhorias de Configuração (Alias e Schematics)](#melhorias-de-configuração-alias-e-schematics)
15. [Gerenciamento de Ambientes](#gerenciamento-de-ambientes)
16. [Services e Consumo de APIs](#servicos-(services))

---

## Configuração Inicial

### 1. Instalando o Angular CLI
Para começar a desenvolver com Angular, primeiro instalamos o Angular CLI globalmente:

```sh
npm install -g @angular/cli
```

Esse comando instala a interface de linha de comando do Angular, permitindo a criação e gerenciamento de projetos Angular de forma eficiente.

### 2. Explorando Comandos do Angular CLI
Podemos consultar a documentação dos comandos disponíveis com:

```sh
ng --help
ng g --help
```

Esses comandos exibem uma lista de opções e funcionalidades do CLI, ajudando a entender melhor como utilizá-lo.

### 3. Criando um Novo Projeto Angular
Criamos um novo projeto com:

```sh
ng new meu-primeiro-projeto-latest
```

Esse comando gera a estrutura inicial do projeto, incluindo os arquivos e configurações necessárias para iniciar o desenvolvimento.

### 4. Compilando o Projeto
Para compilar e gerar a versão estática do projeto, usamos:

```sh
ng build
```

Esse comando cria os arquivos otimizados na pasta `dist/`, que podem ser usados para deploy.

---

## Componentes

### Conceito
Um componente é uma unidade de código responsável por uma única tarefa ou funcionalidade. Ele é composto por três partes principais:

- **Template**: É o código HTML que define a interface visual do componente.
- **Estilo**: É o código CSS que define o estilo visual do componente.
- **Classe**: É a classe TypeScript que define a lógica de funcionamento do componente.

Os componentes são usados para organizar e modularizar o código Angular. Eles permitem que você desenvolva aplicações mais complexas e escaláveis, mantendo o código organizado e fácil de manter.

### Benefícios dos Componentes
- **Reutilização**: Os componentes podem ser reutilizados em diferentes partes da aplicação, reduzindo duplicação de código.
- **Testabilidade**: Os componentes podem ser testados de forma independente, melhorando a qualidade do código.
- **Organização**: Ajudam a manter o código mais claro e de fácil manutenção.

### Exemplos de Componentes
- **Componentes de formulário**: Criam formulários para coletar dados do usuário.
- **Componentes de listagem**: Exibem uma lista de itens.
- **Componentes de navegação**: Controlam a navegação entre diferentes páginas da aplicação.

### Criando um Componente
Para gerar um novo componente usando o Angular CLI, utilizamos o seguinte comando:

```sh
ng generate component nome-do-componente
```

Ou, de forma abreviada:

```sh
ng g c nome-do-componente
```

Esse comando cria a estrutura completa de um componente dentro da pasta `src/app`.

---

## Estilos e SCSS

### Conceito de CSS/SCSS
CSS significa *Cascading Style Sheets* (Folhas de Estilo em Cascata). É usado para definir a aparência visual de elementos HTML, controlando propriedades como:

- Cor
- Tamanho
- Posição
- Borda
- Fonte
- Fundo

Os estilos podem ser aplicados:
- Diretamente no HTML
- Em arquivos CSS externos
- No componente Angular via a propriedade `styles` ou arquivos `.scss`

### Exemplo prático com SCSS e Angular
```scss
:host {
  h2 {
    background-color: blue;
  }
}

:host-context(.theme-dark) {
  h2 {
    background: black;
    color: white;
  }
}

:host-context(.theme-red) {
  h2 {
    background: red;
  }
}

::ng-deep {
  .theme-red {
    border: 5px solid blue;
  }
}
```

### Explicação
- `:host` aplica estilos diretamente ao componente atual.
- `:host-context()` aplica estilos condicionais baseados em classes no contexto externo.
- `::ng-deep` permite estilizar elementos filhos em componentes que normalmente estariam fora do escopo de estilo do componente atual.

Esses recursos do Angular com SCSS permitem criar temas e estilos encapsulados com maior controle visual e reutilização.

---

## Template HTML e Bindings

### Conceito

O Angular permite fazer ligações (*bindings*) entre a lógica do componente e a interface do usuário (template HTML). Isso facilita a criação de interfaces dinâmicas e reativas.

---

### Interpolation (Interpolação)
Exibe valores do componente diretamente no HTML usando `{{ }}`.

```html
<p>{{ name }} - {{ age }} - {{ sum(1, 2) }}</p>
<p>{{ condition }}</p>
```

---

### Property Binding
Liga propriedades HTML a variáveis do componente usando colchetes `[]`.

```html
<button [disabled]="isDisabled">Botão</button>
<img [src]="scrValue" [alt]="name" [title]="name" />
```

---

### Attribute Binding
Permite configurar atributos HTML com base em valores do componente.

```html
<p [attr.title]="name" [attr.aria-label]="name">Sérgio Soares</p>
```

---

### Class e Style Binding
Controla dinamicamente classes CSS e estilos inline.

```html
<p [class.background-red]="age == 32" [class.background-blue]="age > 32">{{ name }}</p>
<p [style.text-decoration]="isTextDecoration">{{ age }}</p>
```

---

### Event Binding
Associa eventos do DOM a métodos do componente.

```html
<button (click)="sumAge()">+</button>
<button (click)="subAge()">-</button>
<input (keydown.shift)="onKeyDown($event)" />

<div style="background: red; width: 300px; height: 300px; margin-top: 10px" (mousemove)="onMouseMove($event)"></div>
```

---

### Two-way Binding
Permite sincronizar dados entre a view e o componente com `[(ngModel)]`.

```html
<input [(ngModel)]="name" />
<p>{{ name }}</p>
```

---

### Diretivas de atributo: NgClass e NgStyle
Aplicação dinâmica de classes e estilos com expressões condicionais.

```html
<div [ngClass]="{ 'background-red': age > 35, 'background-blue': age < 35 }">Classes condicionais.</div>

<div [ngStyle]="{ 'color': age > 35 ? 'green' : 'red', 'font-size': age > 35 ? '10px' : '20px' }">Estilo dinâmico.</div>
```

---

### Template Variables
Variáveis locais para acessar elementos do DOM ou componentes filhos diretamente no template.

```html
<h2 #h1>Template Variables</h2>
<p>{{ h1.innerText }}</p>

<input #name value="Sérgio Soares" />
<p>{{ name.value }}</p>

<app-new-component />
```

No componente TypeScript:

```ts
@ViewChild('name') public nameInput!: ElementRef;
@ViewChild('h1') public nameH1!: ElementRef;
@ViewChild('NewComponent') public childComponent!: NewComponent;

ngAfterViewInit(): void {
  console.log(this.nameInput.nativeElement.value);
  console.log(this.nameH1.nativeElement.innerText);
  console.log(this.childComponent.name);
}
```

---

## Control Flow

### Conceito

O Angular oferece mecanismos para controlar o fluxo de exibição no template usando diretivas como `*ngIf`, `*ngFor`, `ng-template`, `ng-container` e `*ngSwitch`.

Essas estruturas permitem mostrar elementos com base em condições ou listas de dados, deixando a interface dinâmica e reativa.

---

### \*ngIf e \*ngFor com Observables e fallback

```html
<ul *ngIf="loadingData$ | async as data; else loading">
  <li *ngFor="let item of data; trackBy: trackByFn">
    {{ item }}
  </li>
</ul>

<ng-template #loading>
  <p>Carregando...</p>
</ng-template>
```

### Forma antiga com `<ng-container>`

```html
<ng-container *ngIf="loadingData$ | async as data2; else loadingTpl">
  <ul>
    <ng-container *ngFor="let item of data2; trackBy: trackByFn">
      <li>{{ item }}</li>
    </ng-container>
  </ul>
</ng-container>

<ng-template #loadingTpl>
  <p>Carregando...</p>
</ng-template>
```

---

### \*ngFor com variáveis de contexto

```html
<ul>
  <li *ngFor="let item of items; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd; trackBy: trackByFn">
    <p>{{ item.name }}</p>
    <p>index = {{ i }}</p>
    <p>count = {{ c }}</p>
    <p>first = {{ f }}</p>
    <p>last = {{ l }}</p>
    <p>even = {{ e }}</p>
    <p>odd = {{ o }}</p>
  </li>
</ul>
```

### Forma antiga com `<ng-container>`

```html
<ng-container *ngFor="let item of items; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd; trackBy: trackByFn">
  <p>{{ item.name }}</p>
  <p>index = {{ i }}</p>
  <p>count = {{ c }}</p>
  <p>first = {{ f }}</p>
  <p>last = {{ l }}</p>
  <p>even = {{ e }}</p>
  <p>odd = {{ o }}</p>
</ng-container>
```

---

### Exibição condicional com estrutura vazia

```html
<ul>
  @for (item of items; track item.name) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>Não contém valores</li>
  }
</ul>
```

### Alternativa antiga com `*ngIf`

```html
<ul>
  <ng-container *ngIf="items.length === 0; else itemsExist">
    <li>Não contém valores</li>
  </ng-container>

  <ng-template #itemsExist>
    <ng-container *ngFor="let item of items">
      <li>{{ item.name }}</li>
    </ng-container>
  </ng-template>
</ul>
```

---

### Switch Case (ngSwitch)

```html
@switch (switchCondition) {
  @case ('A') {
    <p>Sim sua letra é: A</p>
  }
  @case ('B') {
    <p>Sim sua letra é: B</p>
  }
  @default {
    <p>Os dados não foram encontrados</p>
  }
}
```

### Forma antiga com `ngSwitch`/`ngSwitchCase`

```html
<ng-container [ngSwitch]="switchCondition">
  <ng-container *ngSwitchCase="'A'">
    <p>Sim sua letra é: A</p>
  </ng-container>
  <ng-container *ngSwitchCase="'B'">
    <p>Sim sua letra é: B</p>
  </ng-container>
  <ng-container *ngSwitchDefault>
    <p>Os dados não foram encontrados</p>
  </ng-container>
</ng-container>
```

---

## Deferrable Views

### Conceito

Deferrable Views, também conhecidos como **`@defer`** blocks, são uma funcionalidade introduzida no Angular 17 que permite adiar o carregamento de determinadas partes de uma aplicação. Isso pode ser usado para melhorar o desempenho de aplicações com muito conteúdo.

### Exemplos de uso

- **Carregamento de imagens** apenas quando visíveis.
- **Carregamento de dados** sob demanda.
- **Carregamento de componentes pesados** somente quando necessário.

### Diretivas disponíveis com `@defer`

#### `on`
Especifica uma condição de acionador usando um dos seguintes gatilhos:

- `on idle`: Executa quando o navegador estiver ocioso.
- `on timer(x)`: Aguarda um tempo determinado (ex: `on timer(5s)`).
- `on viewport`: Quando o elemento entra na viewport (visível na tela).
- `on interaction(selector)`: Dispara após interação com um elemento específico.
- `on hover(selector)`: Quando o usuário passa o mouse sobre o elemento.
- `on immediate`: Executa imediatamente, mas com menor prioridade que o carregamento principal.
- `on prefetch`: Indica que o conteúdo pode ser carregado antecipadamente para melhorar a performance (pré-busca).

> Os `on` triggers são sempre tratados como **condições OR**. Qualquer um deles sendo satisfeito inicia o carregamento.

#### `when`
Especifica uma condição imperativa, como uma expressão booleana. Quando essa expressão se torna verdadeira, o conteúdo é carregado:

```html
@defer (when isDataReady) {
  <p>Conteúdo adiado será exibido aqui</p>
}
```

Pode ser usado com observáveis + `async`:
```html
@defer (when observable$ | async) { ... }
```

---

### Sintaxes principais

```html
@defer (on timer(5s); on interaction(trigger); on hover(trigger)) {
  <app-new-component />
}

@placeholder (minimum 5s) {
  <div>Mostrar antes de carregar algo.</div>
}

@loading (after 150ms; minimum 5s) {
  <p>Loading...</p>
}

@error {
  <p>Loading failed :(</p>
}
```

### Considerações

- Os gatilhos (`on`) são tratados como condições **OR**.
- `@placeholder`, `@loading` e `@error` **devem estar fora** do bloco `@defer`.
- Pode melhorar performance, mas pode introduzir complexidade ou impactar usabilidade se mal utilizado.

---

## Signals

### Conceito

Signals são uma nova funcionalidade do Angular 17 que introduzem uma maneira reativa e eficiente de lidar com estados em componentes.

Permitem comunicação entre componentes de forma assíncrona, atualizações automáticas de UI e mais performance no Angular.

### Exemplos

- **Comunicação assíncrona** entre partes da aplicação.
- **Notificações** entre componentes.
- **Atualização de dados reativa** em arrays e valores computados.

### Código exemplo

#### Componente (TypeScript)

```ts
import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Sérgio');
  public lastName = signal('Soares');

  public fullName = computed(() => this.firstName() + this.lastName());

  public array = signal([1]);

  constructor() {
    effect(() => {
      console.log(this.fullName());
      if (this.firstName() === 'João ') {
        alert();
      }
    });
  }

  public updateName() {
    return this.firstName.set('João ');
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => [
      ...oldValue,
      oldValue.length + 1
    ]);
  }
}
```

#### Template (HTML)

```html
<h2>Signals</h2>
<p>{{ firstName() }} {{ lastName() }}</p>
<p>Full Name: {{ fullName() }}</p>

<ul>
  @for(item of array(); track item) {
    <li>{{ item }}</li>
  }
</ul>

<button (click)="updateName()">Update Name</button>
<button (click)="updateArray()">Update Array</button>
```

### Considerações

- `signal()` cria um estado reativo.
- `computed()` cria valores derivados de sinais.
- `effect()` executa efeitos colaterais com base em sinais.

Signals tornam o Angular mais previsível e com performance semelhante a bibliotecas como SolidJS.

---

## Comunicação entre Componentes

### Conceito

A comunicação entre componentes é essencial em aplicações Angular. Isso é feito principalmente por meio dos decoradores `@Input()` e `@Output()`.

- `@Input()` permite passar dados de um componente pai para um componente filho.
- `@Output()` permite que o componente filho envie eventos ou dados de volta para o componente pai.

### Exemplo com `@Input()`

Componente filho (`input.component.ts`):
```ts
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal("Sem dados");

  @Input({
    required: true,
    transform: toUpperCase,
  }) set inputName(value: string) {
    this.name.set(value);
  }
}
```

Template (`input.component.html`):
```html
<h3>Input</h3>
<p>{{ inputName }}</p>
```

### Exemplo com `@Output()`

Componente filho (`output.component.ts`):
```ts
@Component({
  selector: 'app-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Output() public outputName = new EventEmitter();

  public sendOutputName() {
    return this.outputName.emit("Sérgio Soares");
  }
}
```

Template (`output.component.html`):
```html
<h3>Output</h3>
<button (click)="sendOutputName()">Send</button>
```

### Componente Pai

TypeScript (`pai-ou-mae.component.ts`):
```ts
@Component({
  selector: 'app-pai-ou-mae',
  standalone: true,
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './pai-ou-mae.component.html',
  styleUrl: './pai-ou-mae.component.scss'
})
export class PaiOuMaeComponent {
  public name = signal("Sérgio Soares");
  public outputName = signal("Output: sem valor");
}
```

HTML (`pai-ou-mae.component.html`):
```html
<h2>Comunicação entre Componentes</h2>
<app-input [inputName]="name()" />
<app-output (outputName)="outputName.set($event)" />

<p>
  {{ outputName }}
</p>
```

---

## Pipes

### Conceito

Em Angular, um pipe é uma função que pode ser usada para transformar dados antes de serem exibidos no template. Os pipes são usados para:

- Formatar dados (datas, moedas, textos etc.)
- Traduzir dados
- Realizar operações simples de transformação

Eles são definidos com o decorador `@Pipe()` e podem ser utilizados diretamente no HTML com o operador pipe (`|`).

---

### Tipos de Pipes

Existem dois tipos principais de pipes:

- **Pipes de transformação**: Usados para alterar ou formatar valores antes de exibi-los. São os mais comuns.
- **Pipes de filtro**: Usados para exibir apenas um subconjunto dos dados com base em condições específicas.

---

### Exemplos de Uso

```html
<li>date: {{ date() | date : 'dd/MM/yyyy' }}</li>
<li>uppercase: {{ 'Sérgio Soares' | uppercase }}</li>
<li>lowercase: {{ 'SÉRGIO SOARES' | lowercase }}</li>
<li>json: {{ json() | json }}</li>
<li>async: {{ loadingData$ | async }}</li>
<li>currency: {{ 2000.5 | currency : 'BRL' }}</li>
<li>number: {{ 2000.5544 | number : '1.1-1' }}</li>
<li>percent: {{ 0.155 | percent : '1.0-4' }}</li>
```

---

### Criando Pipe Customizado

Você pode criar seu próprio pipe para regras de formatação específicas:

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true,
})
export class CustomStringPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    if (args === 'upper') {
      return value.toUpperCase();
    }
    if (args === 'lower') {
      return value.toLowerCase();
    }
    return value;
  }
}
```

Exemplo de uso no template:

```html
{{ 'SÉRGIO SOARES' | customString : 'lower' }}
```

---

### Considerações

- Pipes são eficientes para renderização, mas devem ser usados com moderação para evitar complexidade.
- Documente bem o uso de pipes customizados.
- Certifique-se de registrar o `LOCALE_ID` corretamente ao usar pipes como `currency`, `percent` e `date` com localizações específicas.

```ts
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
```

---

Essa abordagem com `@Input()` e `@Output()` facilita a troca de dados entre componentes e é amplamente utilizada em aplicações reais para garantir comunicação clara e organizada entre partes da interface.

---

## Formulários Template-driven

### Conceito

Formulários Template-driven são baseados no uso do atributo `ngModel`, que vincula os dados diretamente entre o template e o componente. São ideais para formulários simples e de fácil implementação.

---

### Exemplo 1: Campo de texto

```html
<form>
  <label>
    Nome:
    <input type="text" name="inputName" [(ngModel)]="name" required />
  </label>

  <p>value: {{ name }}</p>
</form>
```

---

### Exemplo 2: Input Radio

```html
<form>
  <label>
    Feminino:
    <input type="radio" name="radioSexo" value="Feminino" [(ngModel)]="sexo" required />
  </label>

  <label>
    Masculino:
    <input type="radio" name="radioSexo" value="Masculino" [(ngModel)]="sexo" required />
  </label>

  <label>
    Outros:
    <input type="radio" name="radioSexo" value="Outros" [(ngModel)]="sexo" required />
  </label>

  <p>Sexo: {{ sexo }}</p>
</form>
```

---

### Exemplo 3: Checkbox Múltiplos

```html
<form>
  <label>
    Angular:
    <input type="checkbox" name="checkboxAngular" value="Angular" [(ngModel)]="techAngular" required />
  </label>

  <label>
    Vue:
    <input type="checkbox" name="checkboxVue" value="Vue" [(ngModel)]="techVue" required />
  </label>

  <label>
    React:
    <input type="checkbox" name="checkboxReact" value="React" [(ngModel)]="techReact" required />
  </label>

  <p>Angular: {{ techAngular }}</p>
  <p>Vue: {{ techVue }}</p>
  <p>React: {{ techReact }}</p>
</form>
```

---

### Exemplo 4: Select dinâmico

```html
<form>
  <select name="selectComidas" [(ngModel)]="comidas">
    <option value="">Selecione uma opção</option>
    <option *ngFor="let item of listComidas" [ngValue]="item">
      {{ item.comida }}
    </option>
  </select>

  <p>{{ comidas | json }}</p>
  <p>Comida: {{ comidas?.comida }}</p>
  <p>Preço: {{ comidas?.preco }}</p>
</form>
```

```ts
export class TemplateDrivenFormsComponent {
  public listComidas = [
    { comida: 'X-salada', preco: 'R$ 10' },
    { comida: 'X-bacon', preco: 'R$ 11' },
    { comida: 'Coxinha', preco: 'R$ 6' },
  ];
}
```

---

### Exemplo 5: Envio do formulário

```html
<form #ngForm="ngForm" (ngSubmit)="submitForm(ngForm)">
  <!-- Campos aqui -->
  <button [disabled]="!ngForm.valid">Send</button>
</form>

<p>Form Valid: {{ ngForm.valid }}</p>
<p>Form Value: {{ ngForm.value | json }}</p>
```

```ts
public submitForm(form: NgForm): void {
  console.log(form.valid);
  if (form.valid) {
    console.log(form.value);
  }
}
```

---

### Vantagens

- Fácil de implementar para formulários simples
- Rápido para prototipagem
- Menos código no componente (lógica no template)

### Desvantagens

- Difícil manutenção em formulários complexos
- Menos controle sobre validações personalizadas

> Use Template-driven para formulários pequenos e comece a migrar para Reactive Forms conforme o crescimento e complexidade aumentam.

---

## Reactive Forms

### Conceito

Formulários Reactive são baseados em modelos e oferecem controle total sobre o estado e comportamento dos campos do formulário. Utilizam `FormControl`, `FormGroup`, `FormArray` e o serviço `FormBuilder` para criação e manipulação de formulários.

---

### Criação de campos com `FormControl`

```ts
const name = new FormControl('');
```

---

### Agrupamento de campos com `FormGroup`

```ts
const profileForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl('')
});
```

---

### Listas dinâmicas com `FormArray`

```ts
const myFavoriteFoods = new FormArray([
  new FormControl('X-tudo')
]);
```

---

### Uso de `FormBuilder` para simplificar a criação de formulários

```ts
constructor(private fb: FormBuilder) {}

profileForm = this.fb.group({
  name: [''],
  myStacks: this.fb.group({
    front: ['Angular'],
    back: ['NodeJs'],
  }),
  myFavoriteFoods: this.fb.array([['X-tudo']])
});
```

---

### Acesso a propriedades como `value`, `valid`, `dirty` e `touched`

```html
<p>value: {{ profileForm.value | json }}</p>
<p>valid: {{ profileForm.valid }}</p>
<p>dirty: {{ profileForm.dirty }}</p>
<p>touched: {{ profileForm.touched }}</p>
```

---

### Validações nativas com `Validators` (ex: `required`, `minLength`, `maxLength`)

```ts
name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]]
```

---

### Criação de `Custom Validators`

```ts
function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);
    return hasUpperCase && hasNumber ? null : { textValidator: true };
  };
}
```

Uso:

```ts
name: ['', [Validators.required, textValidator()]]
```

---

### Adição dinâmica de campos no `FormArray`

```ts
public addMyFavoriteFoods(newFood: string) {
  const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
  myFavoriteFoods.push(new FormControl(newFood));
}
```

---

### Validação de formulário antes do envio (`submit()`)

```ts
public submit() {
  if (this.profileForm.valid) {
    console.log(this.profileForm.value);
  }
}
```

---

### Considerações finais

Apesar de mais verboso que Template-driven, o Reactive Forms fornece muito mais poder, controle e testabilidade para aplicações maiores ou mais exigentes.

---

## Host Elements

### Conceito

Host Elements permitem controlar atributos e eventos diretamente no elemento que hospeda o componente, usando `@HostBinding` e `@HostListener`.

- **@HostBinding**: Faz a ligação de propriedades (atributos) diretamente no elemento host.
- **@HostListener**: Escuta eventos DOM no elemento host ou no documento.

### Exemplo Prático

```ts
@Component({
  selector: 'app-host-elements',
  standalone: true,
  template: `<p>Host elements</p>`
})
export class HostElementsComponent {

  @HostBinding('attr.class')
  public class = 'vidaFullStack';

  @HostListener('document:keypress', ['$event'])
  public updateHostListener(event: KeyboardEvent) {
    console.log(event);
  }

  @HostListener('click', ['$event'])
  public updateClick() {
    alert('Denner Troquatte');
  }
}
```

---

## Ciclo de Vida dos Componentes

### Conceito

O ciclo de vida no Angular é composto por uma série de eventos que ocorrem durante o ciclo de vida de um componente ou diretiva. Esses eventos permitem que você controle o comportamento e a execução de código em diferentes estágios da vida de um componente. Entender e utilizar esses métodos é fundamental para controlar o comportamento e o estado dos seus componentes Angular de forma eficaz.

### Hooks do Ciclo de Vida

1. **ngOnChanges**

   - **Para que serve**: Este método é chamado sempre que um valor de entrada (`@Input`) de um componente muda.
   - **Explicação**: É útil para reagir a mudanças nos dados de entrada e atualizar o estado interno do componente.
   
```ts
ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChanges', changes);
}
```

2. **ngOnInit**

   - **Para que serve**: É chamado uma única vez após a inicialização do componente.
   - **Explicação**: Ideal para realizar inicializações como buscar dados de um serviço.

```ts
ngOnInit(): void {
  console.log('ngOnInit');
}
```

3. **ngDoCheck**

   - **Para que serve**: Chamado durante cada ciclo de detecção de mudanças.
   - **Explicação**: Permite verificações manuais em objetos complexos.

```ts
ngDoCheck(): void {
  console.log('ngDoCheck');
}
```

4. **ngAfterContentInit**

   - **Para que serve**: Chamado após a projeção de conteúdo externo (`ng-content`).
   - **Explicação**: Útil para acessar elementos projetados.

```ts
ngAfterContentInit(): void {
  console.log('ngAfterContentInit');
}
```

5. **ngAfterContentChecked**

   - **Para que serve**: Após cada verificação do conteúdo projetado.
   - **Explicação**: Permite reações baseadas em mudanças no conteúdo externo.

```ts
ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked');
}
```

6. **ngAfterViewInit**

   - **Para que serve**: Chamado após a inicialização da view e views filhas.
   - **Explicação**: Ideal para interagir com o DOM.

```ts
ngAfterViewInit(): void {
  console.log('ngAfterViewInit');
}
```

7. **ngAfterViewChecked**

   - **Para que serve**: Após cada verificação da view.
   - **Explicação**: Pode ser usado para ações baseadas no estado da view.

```ts
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked');
}
```

8. **ngOnDestroy**

   - **Para que serve**: Antes da destruição do componente.
   - **Explicação**: Ideal para limpeza de recursos e cancelamento de observables.

```ts
ngOnDestroy(): void {
  console.log('ngOnDestroy');
}
```

### Representação Visual (Execução)

Durante a inicialização:

```plaintext
constructor()
↓
ngOnChanges()
↓
ngOnInit()
↓
ngDoCheck()
↓
ngAfterContentInit()
↓
ngAfterContentChecked()
↓
ngAfterViewInit()
↓
ngAfterViewChecked()
```

Durante atualizações posteriores:

```plaintext
ngOnChanges()
↓
ngDoCheck()
↓
ngAfterContentChecked()
↓
ngAfterViewChecked()
```

Na destruição:

```plaintext
ngOnDestroy()
```

---

## Melhorias de Configuração (Alias e Schematics)

### tsconfig.json - Criação de Alias

```json
"compilerOptions": {
  "baseUrl": "./src",
  "paths": {
    "@components/*": ["app/components/*"],
    "@pipes/*": ["app/pipes/*"]
  }
}
```

Agora podemos importar componentes assim:

```ts
import { NewComponent } from '@components/new-component/new-component.component';
```

### angular.json - Configuração de Schematics

```json
"@schematics/angular:component": {
  "style": "scss",
  "changeDetection": "OnPush",
  "displayBlock": true
}
```

Essas configurações garantem que novos componentes venham por padrão:

- Com arquivos `.scss`
- Com `ChangeDetectionStrategy.OnPush`
- Com `display: block` no seletor

---

## Gerenciamento de Ambientes

### Conceito

O Angular permite a configuração de múltiplos ambientes (desenvolvimento, homologação e produção) utilizando arquivos de environment. Isso facilita a troca de URLs de APIs, imagens e outras variáveis sensíveis conforme o estágio do projeto, sem precisar alterar o código-fonte manualmente.

### Estrutura de Arquivos

Dentro da pasta `src/environments/` foram criados:

- `environment.development.ts` (desenvolvimento)
- `environment.homologation.ts` (homologação)
- `environment.ts` (produção)

Cada arquivo define constantes específicas para cada ambiente.

### Exemplo de Código

```typescript
// environment.development.ts
export const environment = {
  env: 'dev',
  apiTask: 'https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks',
  img: 'http://localhost:4200/assets/',
};
```

```typescript
// environment.homologation.ts
export const environment = {
  env: 'hom',
  apiTask: 'https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks',
  img: 'http://localhost:4200/assets/',
};
```

```typescript
// environment.ts
export const environment = {
  env: 'prod',
  apiTask: 'https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks',
  img: 'http://localhost:4200/assets/',
};
```

### Como funciona

O Angular utiliza o `angular.json` para configurar **fileReplacements** conforme o ambiente de build:

```json
"fileReplacements": [
  {
    "replace": "src/environments/environment.ts",
    "with": "src/environments/environment.development.ts"
  }
]
```

Além disso, foram criados scripts no `package.json` para facilitar o build:

```json
"scripts": {
  "start": "ng serve",
  "build": "ng build",
  "build:hom": "ng build --configuration homologation",
  "watch": "ng build --watch --configuration development",
  "test": "ng test"
}
```

Assim, podemos acessar os dados do ambiente dentro do projeto:

```typescript
import { environment } from '../environments/environment';

export class AppComponent {
  constructor() {
    console.log(environment.env); // Exibe 'dev', 'hom' ou 'prod' no console
  }
}
```

Essa estratégia permite separar configurações específicas de ambiente sem precisar alterar manualmente o código-fonte, melhorando a escalabilidade e manutenção do projeto.

---

## Serviços (Services)

### Conceito

No Angular, **Services** (ou Serviços) são classes responsáveis por **compartilhar lógica, dados e funcionalidades entre componentes**. Eles permitem que a lógica de negócio, requisições HTTP, manipulação de estados e interações com APIs sejam separadas do código do componente. Isso torna o código mais limpo, reutilizável e fácil de testar.

---

### Vantagens dos Serviços

* 🔁 **Reutilização de código**: Um único serviço pode ser usado por vários componentes.
* 🧠 **Separação de responsabilidades**: A lógica de negócios fica isolada do componente.
* 🧪 **Facilidade de testes**: É possível testar o serviço de forma independente.
* 📦 **Organização**: Centraliza o acesso a dados e funcionalidades.

---

### Quando usar um Serviço?

* Acessar dados de uma API ou banco de dados.
* Compartilhar dados entre componentes.
* Realizar lógica de negócio, validações ou cálculos.
* Manipular cache, autenticação ou autorização.

---

## Exemplo de Serviço com Requisições HTTP

Criação da interface `ITask`:

```ts
interface ITask {
  id: string;
  title: string;
}
```

---

### 🔹 HttpClient + GET

O método GET busca **dados do servidor**.

```ts
public httpTaskList$(): Observable<ITask[]> {
  const params = new HttpParams().set('page', '1');

  return this.#http.get<ITask[]>(this.#url(), { params }).pipe(
    tap((res) => this.#setTaskList.set(res)),
    catchError((error: HttpErrorResponse) => {
      this.#setTaskListError.set(error.error.message);
      return throwError(() => error);
    })
  );
}
```

> Esse método retorna uma lista de tarefas da API e atualiza o signal com os dados ou o erro.

---

### 🔹 GET por ID

Busca **um item específico** pela URL com `id`.

```ts
public httpTaskId$(id: string): Observable<ITask> {
  return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
    tap((res) => this.#setTaskId.set(res)),
    catchError((error: HttpErrorResponse) => {
      this.#setTaskIdError.set(error.error.message);
      return throwError(() => error);
    })
  );
}
```

---

### 🔹 POST

Usado para **criar um novo item** no backend.

```ts
public httpTaskCreate$(title: string): Observable<ITask> {
  return this.#http.post<ITask>(this.#url(), { title }).pipe(
    catchError((error: HttpErrorResponse) => {
      this.#setTaskCreateError.set(error.error.message);
      return throwError(() => error);
    })
  );
}
```

---

### 🔹 PATCH

Utilizado para **atualizar parcialmente** um recurso.

```ts
public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
  return this.#http.patch<ITask>(`${this.#url()}/${id}`, { title }).pipe(
    catchError((error: HttpErrorResponse) => {
      this.#setTaskUpdateError.set(error.error.message);
      return throwError(() => error);
    })
  );
}
```

---

### 🔹 DELETE

Remove um item específico da API.

```ts
public httpTaskDelete$(id: string): Observable<void> {
  return this.#http.delete<void>(`${this.#url()}/${id}`, {}).pipe(
    catchError((error: HttpErrorResponse) => {
      this.#setTaskDeleteError.set(error.error.message);
      return throwError(() => error);
    })
  );
}
```

---

## 🛡️ Interceptors + Retry

Interceptores permitem **interceptar requisições e respostas** para:

* Adicionar cabeçalhos (tokens, metadata etc)
* Repetir requisições automaticamente (retry)
* Centralizar tratamento de erros

### Exemplo de Interceptor

```ts
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('x-vida-full-stack', 'dev');
  const reqClone = req.clone({ headers });

  return next(reqClone).pipe(
    shareReplay(),
    retry({ count: 2, delay: 1000 }),
    catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    })
  );
};
```

---

## 🧪 Consumindo os Serviços em Componentes

```ts
@Component({ ... })
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  public getTaskList = this.#apiService.getTaskList;
  public getTaskId = this.#apiService.getTaskId;

  ngOnInit(): void {
    this.#apiService.httpTaskList$().subscribe();
    this.#apiService.httpTaskId$('ID_DO_ITEM').subscribe();
  }

  public httpTaskCreate(title: string) {
    this.#apiService.httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }

  public httpTaskUpdate(id: string, title: string) {
    this.#apiService.httpTaskUpdate$(id, title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }

  public httpTaskDelete(id: string) {
    this.#apiService.httpTaskDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe();
  }
}
```

---

### 🧠 Considerações Finais

* Os serviços ajudam a manter seus componentes **enxutos** e focados apenas na exibição da interface.
* O uso de `signal()` junto com `Observable` torna seu fluxo de dados reativo e muito performático.
* A organização da camada de serviços facilita **testes, manutenção e escalabilidade** da aplicação.

