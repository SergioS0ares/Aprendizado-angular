# Aprendizado-angular

Repositório com meus estudos e experimentos em Angular, incluindo exemplos práticos e boas práticas do framework. 

## Sumário
1. [Configuração Inicial](#configura%C3%A7%C3%A3o-inicial)
2. [Componentes](#componentes)
3. [Estilos e SCSS](#estilos-e-scss)
4. [Template HTML e Bindings](#template-html-e-bindings)

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

O Angular permite fazer ligações (*bindings*) entre a lógica do componente e a interface do usuário (template HTML). Isso facilita a criação de interfaces dinâmicas, onde os dados do componente são exibidos ou controlam comportamentos diretamente no HTML.

---

### Interpolation (Interpolação)
Permite exibir dados do componente diretamente no HTML usando `{{ }}`.

**Exemplo:**
```html
<h3>Text interpolation</h3>
<p>{{ name }} - {{ age }} - {{ sum(1, 2) }}</p>
<p>{{ age > 1 ? "teste" : "teste2" }}</p>
```

---

### Property Binding
Usado para ligar propriedades de elementos HTML a propriedades do componente com `[property]`.

**Exemplo:**
```html
<h3>Property binding</h3>
<button [disabled]="isDisabled">Botão</button>
<img [src]="scrValue" [alt]="name" [title]="name" />
```

---

### Exemplo Completo do Componente

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  templateUrl: './template-binding.component.html',
  styleUrls: ['./template-binding.component.scss']
})
export class TemplateBindingComponent {
  public name: string = 'Sergio';
  public age: number = 21;
  public isDisabled = true;
  public scrValue = 'https://th.bing.com/th/id/OIP.eBV6NKOwkJSZXDufD45I3wHaE8?rs=1&pid=ImgDetMain';

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

  constructor() {
    setTimeout(() => {
      this.name = 'João e Maria';
    }, 1000);
  }
}
```

---

Novos aprendizados serão adicionados conforme avanço nos estudos.

