# Painel de Projetos COR

Vitrine dos sistemas desenvolvidos para o **Centro de Operações e Resiliência (COR)** da Prefeitura do Rio de Janeiro. Cada projeto aparece como um card com capa, descrição e tags, e pode ser filtrado por categoria ou encontrado pela busca.

Página estática (HTML, CSS e JavaScript puro), sem build e sem dependências para instalar.

## Sistemas

| Sistema | Categoria | Link |
|---|---|---|
| Unusual Waze e Routes | Mobilidade e Trânsito | https://waze.computei.srv.br/dashboard |
| Tempovias | Mobilidade e Trânsito | https://tempovias.dados.rio.br/login |
| Histórico Waze | Mobilidade e Trânsito | https://historicowaze.dados.rio.br/dashboard.html |
| Tráfego e Mobilidade Urbana | Mobilidade e Trânsito | https://trafego-iacor.onrender.com/ |
| Chovendo Agora | Clima e Chuva | https://chovendoagora.cor.rio/ |
| Vision AI – Alagamentos | Clima e Chuva | http://alagamento.cor.rio/login.html |
| SIMAA | Alertas e Resiliência | https://simaav2.simaa.rio.br/login?next=%2F |
| COR Sim Rio 3D | Alertas e Resiliência | https://resilience-rio.netlify.app/ |
| TIM SmartSignal | Inteligência Territorial | https://smartsignal.timbrasil.com.br/smartsignal/cor-rj/login.html |
| Monitoramento Eleições 2026 | Grandes Eventos | https://monitoramentoeleicoes2026.cor.rio/ |

## Estrutura

```
.
├── index.html     # layout, estilos e renderização dos cards/filtros
├── projetos.js    # catálogo de categorias e projetos (edite aqui)
├── netlify.toml   # configuração de publicação no Netlify
└── README.md
```

## Rodando localmente

Basta abrir o `index.html` no navegador. Se preferir um servidor local:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Adicionando um projeto

Inclua um objeto na lista `PROJETOS` em [projetos.js](projetos.js):

```js
{
  titulo: "Nome do sistema",
  descricao: "O que o sistema faz, em uma ou duas frases.",
  link: "https://endereco-do-sistema",
  categoria: "Mobilidade e Trânsito",   // precisa existir em CATEGORIAS
  icone: "bi-geo-alt",                  // Bootstrap Icons: https://icons.getbootstrap.com
  tags: ["Tag 1", "Tag 2"],
  imagem: "https://...",                // opcional: foto de capa no lugar do gradiente
},
```

Para criar um novo filtro, adicione a categoria em `CATEGORIAS` com as duas cores do gradiente da capa:

```js
"Nova Categoria": { cor1: "#42b9eb", cor2: "#13335a" },
```

## Identidade visual

Cores da marca Prefeitura do Rio 2025: `#13335a`, `#2a688f`, `#42b9eb`, `#eceded`. As capas usam também as cores dos estágios operacionais do COR (`#147336`, `#f0ac2b`, `#f06949`, `#b3232a`).

## Deploy (Netlify)

O site é publicado no Netlify direto da pasta raiz, sem comando de build.

```bash
netlify deploy --prod --dir .
```
