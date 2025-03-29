# Aprendizado-angular

Repositório com meus estudos e experimentos em Angular, incluindo exemplos práticos e boas práticas do framework. 

## Sumário
1. [Configuração Inicial](#configura%C3%A7%C3%A3o-inicial)
2. [Componentes](#componentes)
3. [Estilos e SCSS](#estilos-e-scss)
4. [Template HTML e Bindings](#template-html-e-bindings)
5. [Control Flow](#control-flow)

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

O Angular oferece mecanismos para controlar o fluxo de exibição no template usando diretivas como `*ngIf`, `*ngFor`, `ng-template` e `ng-container`.

Essas estruturas são utilizadas para renderizar elementos condicionalmente ou iterativamente com base nos dados do componente.

---

### *ngIf e *ngFor com Observables e fallback

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

---

### Forma antiga com <ng-container>

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

### *ngFor com variáveis de contexto

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

---

### Forma antiga com <ng-container>

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

### Interação com input e adição dinâmica

```html
<input #name type="text" />
<button (click)="addNewName(name.value)">Add Name</button>
```

```ts
public items = [
  { name: 'Sérgio Soares' },
  { name: 'João' }
];

public addNewName(value: string) {
  this.items.push({ name: value });
}
```

Esses recursos permitem desenvolver interfaces dinâmicas, reativas e com controle granular de fluxo baseado em condições e listas.

---

Novos aprendizados serão adicionados conforme avanço nos estudos.



