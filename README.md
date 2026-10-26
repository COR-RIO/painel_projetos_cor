# Painel de Projetos COR

Vitrine dos sistemas desenvolvidos para o **Centro de Operações e Resiliência (COR)** da Prefeitura do Rio de Janeiro. Cada projeto aparece como um card com capa, descrição e tags, e pode ser filtrado por categoria ou encontrado pela busca.

Ao clicar em um card, o sistema abre dentro do próprio painel, com uma barra para voltar à lista e outra opção para abrir em nova aba. O endereço muda para `#sistema=<nome>`, então o voltar do navegador e o compartilhamento do link funcionam. Sistemas que bloqueiam iframe ou usam `http` (marcados com `incorporar: false`) abrem na mesma aba.

Página estática (HTML, CSS e JavaScript puro), sem build e sem dependências para instalar.

## Sistemas

| Sistema | Categoria | Link |
|---|---|---|
| Unusual Waze e Routes | Mobilidade e Trânsito | https://waze.computei.srv.br/dashboard |
| Tempovias | Mobilidade e Trânsito | https://tempovias.dados.rio.br/login |
| Histórico Waze | Mobilidade e Trânsito | https://historicowaze.dados.rio.br/dashboard.html |
| Tráfego e Mobilidade Urbana | Mobilidade e Trânsito | https://trafego-iacor.onrender.com/ |
| Monitoramento de Túneis | Mobilidade e Trânsito | https://monitoramento-tuneis.onrender.com/ |
| Chovendo Agora | Clima e Chuva | https://chovendoagora.cor.rio/ |
| Vision AI – Alagamentos | Clima e Chuva | http://alagamento.cor.rio/login.html |
| SIMAA | Alertas e Resiliência | https://simaav2.simaa.rio.br/login?next=%2F |
| COR Sim Rio 3D | Alertas e Resiliência | https://resilience-rio.netlify.app/ |
| Painel Operacional COR.Rio | Alertas e Resiliência | https://appcor.cor-rio.work/login/?next=/eventos/ |
| TIM SmartSignal | Inteligência Territorial | https://smartsignal.timbrasil.com.br/smartsignal/cor-rj/login.html |
| Monitoramento Eleições 2026 | Grandes Eventos | https://monitoramentoeleicoes2026.cor.rio/ |

## Estrutura

```
.
├── index.html     # layout, estilos e renderização dos cards/filtros
├── projetos.js    # catálogo de categorias e projetos (edite aqui)
├── assets/        # assinatura do COR (SVG) e capas dos projetos (capas/)
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
  imagem: "assets/capas/nome.jpg",      // opcional: captura de tela no lugar do ícone
  incorporar: false,                    // opcional: o sistema bloqueia iframe ou é http; abre na mesma aba
},
```

Para criar um novo filtro, adicione a categoria em `CATEGORIAS` com as duas cores do gradiente da capa:

```js
"Nova Categoria": { cor1: "#42b9eb", cor2: "#13335a" },
```

## Identidade visual

A interface segue o Manual de Marca da Prefeitura do Rio 2025:

- **Assinatura oficial do COR** (marca da Prefeitura + "Centro de Operações e Resiliência"), a mesma usada em cor.rio, em [assets/marca-cor.svg](assets/marca-cor.svg) e embutida no `index.html` como `<symbol>` (usa `currentColor`: branca no topo azul, azul no rodapé). Não redesenhe nem separe os elementos.
- **Cores digitais** `#13335a`, `#2a688f`, `#42b9eb` e `#eceded`; as categorias usam as cores dos estágios operacionais do COR (`#147336`, `#f0ac2b`, `#f06949`, `#b3232a`) como acento.
- **Tipografia** Cera Pro (Black nos títulos, Medium nos rótulos, Regular nos textos). Sem a Cera Pro instalada, entra a Outfit (Google Fonts), geométrica e próxima dela.
- **Padrão de triângulos** (páginas "Padrões") no topo, gerado em SVG e dissolvido antes do texto.
- **Capas dos cards** no degradê digital do manual (`#13335a` → `#2a688f` → `#42b9eb`) com um ícone ligado ao nome do projeto (campo `icone`). Com `imagem` definida, a capa usa a captura de tela do sistema (em `assets/capas/`, 800×400) com um filtro azul leve que sai no hover.
- **Triângulo no canto superior direito**, **triângulo como ponto-final** (metade da altura da fonte) e **rodapé com marca, fio e numeração**, como nas páginas do manual. O número do rodapé mostra quantos projetos estão visíveis.
- **Tags como hashtags** (`#TempoReal`), a exceção de caixa prevista no manual.

## Deploy (Netlify)

O site é publicado no Netlify direto da pasta raiz, sem comando de build.

```bash
netlify deploy --prod --dir .
```
