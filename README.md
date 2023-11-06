Trabalhando na minha task...

# Camel UI

Este projeto é uma UI do sistema da Loja Virtual da Camel, para atendimento a clientes, utilizando React (v18.2.0).

## Recursos

- ReactJS
- ViteJS
- StyledComponents
- Cypress
- ESLint

## Instalação

1. Faça o clone do repositório: `git clone https://github.com/Elias-Neto/camel-ui`
2. Instale as dependências: `npm i`
3. Configure as variáveis de ambiente (veja a seção "Configuração" abaixo)
4. Inicie o servidor: `npm run dev`

## Regras de desenvolvimento

### Estrutura de Pastas

#### `/components`

> Cada módulo de 'grupo' de components deve possuir um diretório próprio com os recursos internos distribuídos da seguinte forma:

```
components
|
└───layout
│   └───Header
│       │   index.jsx
│       │   styles.js
|   ...
...
```

#### `/contexts`

> Cada contexto deve possuir um arquivo próprio:

```
contexts
|
└───layout
│   │   AuthContext.jsx
│    ...
```

#### `/pages`

> Cada página deve possuir um diretório próprio com os recursos internos distribuídos da seguinte forma:
> OBS: Caso haja um agrupamento de páginas, agrupe as páginas em um diretório (Exemplo do CRUD)

```
pages
|
└───Login
│   │   index.jsx
│   │   styles.js
└───Crud-Example
│   └───HandleExample
│   │   index.jsx
│   │   styles.js
│   └───ListExample
│   │   index.jsx
│   │   styles.js
...
```

#### `/routes`

> Caso haja autenticação, deve possuir um arquivo próprio para rotas que precisam de autenticação e para rotas que não precisam:

```
routes
|   app.routes.jsx (Default Routes)
|   auth.routes.jsx (Authenticate Routes)
|   index.jsx
...
```

#### `/services`

> Cada módulo de serviços da API deve possuir um diretório próprio com os recursos internos distribuídos da seguinte forma:

```
services
|   api.js (API Connection)
|   customer-service.js
|   product-service.js
...
```

#### `/styles`

> Essa é uma pasta de estilos globais:

```
styles
|   global.js (Estilos Globais)
|   theme.js (Cores)
|   animations.js (Animações)
...
```

#### `/assets`

> Essa pasta serve para armazenar imagens, gif's, vídeos, etc.

## Testes com Cypress
