// Catálogo de projetos do COR.
// Para adicionar um projeto, inclua um objeto nesta lista:
//   titulo, descricao, link  -> textos e URL do card
//   categoria                -> deve existir em CATEGORIAS (vira um filtro)
//   icone                    -> classe do Bootstrap Icons (https://icons.getbootstrap.com)
//   tags                     -> etiquetas exibidas no rodapé do card
//   imagem (opcional)        -> URL de uma imagem de capa; sem ela, usa o gradiente da categoria

const CATEGORIAS = {
  "Mobilidade e Trânsito": { cor1: "#f0ac2b", cor2: "#2a688f" },
  "Clima e Chuva":         { cor1: "#42b9eb", cor2: "#13335a" },
  "Alertas e Resiliência": { cor1: "#b3232a", cor2: "#13335a" },
  "Inteligência Territorial": { cor1: "#147336", cor2: "#13335a" },
  "Grandes Eventos":       { cor1: "#f06949", cor2: "#13335a" },
};

const PROJETOS = [
  {
    titulo: "Unusual Waze e Routes",
    descricao: "Plataforma de monitoramento de rotas e de irregularidades no trânsito com dados do Waze Partner.",
    link: "https://waze.computei.srv.br/dashboard",
    categoria: "Mobilidade e Trânsito",
    icone: "bi-sign-turn-right",
    tags: ["Waze Partner", "Rotas", "Tempo real"],
  },
  {
    titulo: "Tempovias",
    descricao: "Monitoramento do tempo de percurso das principais rotas e vias da cidade.",
    link: "https://tempovias.dados.rio.br/login",
    categoria: "Mobilidade e Trânsito",
    icone: "bi-stopwatch",
    tags: ["Rotas", "Tempo de viagem", "Login"],
  },
  {
    titulo: "Histórico Waze",
    descricao: "Mapa de congestionamento, comparação por hora entre dias, severidade, ranking de ruas mais afetadas e tipos de alerta.",
    link: "https://historicowaze.dados.rio.br/dashboard.html",
    categoria: "Mobilidade e Trânsito",
    icone: "bi-car-front-fill",
    tags: ["Waze", "Congestionamento", "Histórico"],
  },
  {
    titulo: "Tráfego e Mobilidade Urbana",
    descricao: "Monitoramento de tráfego e mobilidade urbana do Centro de Operações com apoio de inteligência artificial.",
    link: "https://trafego-iacor.onrender.com/",
    categoria: "Mobilidade e Trânsito",
    icone: "bi-stoplights",
    tags: ["IA", "Tráfego", "Mobilidade"],
  },
  {
    titulo: "Chovendo Agora",
    descricao: "Onde está chovendo agora? Monitoramento de chuvas em tempo real nas estações pluviométricas da cidade.",
    link: "https://chovendoagora.cor.rio/",
    categoria: "Clima e Chuva",
    icone: "bi-cloud-rain-heavy",
    tags: ["Pluviometria", "Mapa", "Tempo real"],
  },
  {
    titulo: "Vision AI – Alagamentos",
    descricao: "Monitoramento inteligente de alagamentos a partir das câmeras da cidade.",
    link: "http://alagamento.cor.rio/login.html",
    categoria: "Clima e Chuva",
    icone: "bi-camera-video",
    tags: ["Visão Computacional", "Câmeras", "Alagamentos"],
  },
  {
    titulo: "SIMAA",
    descricao: "Sistema Integrado Municipal de Alarmes e Alertas: acompanha indicadores, dispara alarmes e coordena respostas em um único painel operacional.",
    link: "https://simaav2.simaa.rio.br/login?next=%2F",
    categoria: "Alertas e Resiliência",
    icone: "bi-bell",
    tags: ["Alarmes", "Alertas", "Tempo real"],
  },
  {
    titulo: "COR Sim Rio 3D",
    descricao: "Simulação 3D da cidade do Rio de Janeiro para apoio à resiliência e ao planejamento operacional.",
    link: "https://resilience-rio.netlify.app/",
    categoria: "Alertas e Resiliência",
    icone: "bi-buildings",
    tags: ["3D", "Simulação", "Resiliência"],
  },
  {
    titulo: "TIM SmartSignal",
    descricao: "Inteligência geográfica com dados de mobilidade da TIM: concentração, deslocamento e pontos de pressão no território.",
    link: "https://smartsignal.timbrasil.com.br/smartsignal/cor-rj/login.html",
    categoria: "Inteligência Territorial",
    icone: "bi-broadcast-pin",
    tags: ["TIM", "Geodados", "Mobilidade"],
  },
  {
    titulo: "Monitoramento Eleições 2026",
    descricao: "Gestão operacional das eleições com mapa de calor e integração de dados da CET-Rio, GM-Rio e Waze.",
    link: "https://monitoramentoeleicoes2026.cor.rio/",
    categoria: "Grandes Eventos",
    icone: "bi-check2-square",
    tags: ["Eleições 2026", "Mapa de calor", "Operação"],
  },
];
