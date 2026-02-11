export type JournalArticle = {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  content: string[];
};

export const journalArticles: JournalArticle[] = [
  {
    id: "feira-ciencias-2026",
    title: "Feira de ciencias encanta as familias",
    summary:
      "As criancas apresentaram projetos sobre meio ambiente e sustentabilidade. A feira contou com experimentos praticos e exposicoes artisticas.",
    date: "10 Fev 2026",
    category: "Eventos",
    content: [
      "A Feira de Ciencias reuniu turmas, familias e equipe escolar em uma mostra de trabalhos construidos ao longo do semestre.",
      "As atividades exploraram temas como cuidado com a natureza, reciclarem e alimentacao saudavel, sempre com linguagem adequada a educacao infantil.",
      "A participacao das familias reforcou o vinculo com a escola e valorizou o protagonismo das criancas durante as apresentacoes.",
    ],
  },
  {
    id: "horta-primeira-colheita",
    title: "Horta escolar produz primeira colheita",
    summary:
      "As turmas participaram de todo o processo, do plantio a colheita. Parte dos alimentos foi incorporada ao cardapio da semana.",
    date: "05 Fev 2026",
    category: "Sustentabilidade",
    content: [
      "A primeira colheita da horta escolar marcou uma etapa importante do projeto de educacao ambiental.",
      "As criancas acompanharam o ciclo das plantas e aprenderam sobre cuidado, paciencia e responsabilidade coletiva.",
      "Os alimentos colhidos foram utilizados em atividades pedagogicas e tambem no planejamento alimentar da escola.",
    ],
  },
  {
    id: "projeto-leitura-destaque",
    title: "Projeto de leitura e destaque no semestre",
    summary:
      "O projeto Pequenos Leitores fortaleceu o habito da leitura com atividades ludicas e rodas de historias em sala.",
    date: "01 Fev 2026",
    category: "Educacao",
    content: [
      "O projeto de leitura ampliou o contato das criancas com livros, historias e diferentes formas de narracao.",
      "A proposta incluiu contacao de historias, rodas de conversa e momentos de leitura compartilhada entre turmas.",
      "A escola observou maior interesse por linguagem oral e escrita, alem de maior participacao das familias no incentivo a leitura em casa.",
    ],
  },
];

export type SchoolProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  details: string[];
};

export const schoolProjects: SchoolProject[] = [
  {
    id: "horta-escolar",
    title: "Horta Escolar",
    description:
      "Projeto de educacao ambiental em que as criancas aprendem a plantar, cuidar e colher alimentos utilizados no cardapio escolar.",
    tags: ["Sustentabilidade", "Educacao ambiental"],
    details: [
      "As turmas participam do plantio, irrigacao e acompanhamento do crescimento das plantas.",
      "O projeto integra ciencias, alimentacao saudavel e responsabilidade coletiva.",
      "As familias sao convidadas para momentos de partilha dos resultados e orientacoes de cultivo em casa.",
    ],
  },
  {
    id: "pequenos-leitores",
    title: "Pequenos Leitores",
    description: "Incentivo a leitura com contacao de historias, rodas de leitura e emprestimo de livros para casa.",
    tags: ["Leitura", "Cultura"],
    details: [
      "O projeto organiza uma rotina semanal de leitura mediada e conversa sobre historias.",
      "As criancas exploram livros ilustrados, reconto e criacao de pequenas narrativas.",
      "O emprestimo de livros fortalece a parceria entre escola e familia no habito da leitura.",
    ],
  },
  {
    id: "arte-expressao",
    title: "Arte e Expressao",
    description: "Atividades artisticas que estimulam criatividade, incluindo pintura, musica, teatro e danca.",
    tags: ["Artes", "Expressao"],
    details: [
      "A proposta amplia repertorios de linguagem visual, corporal e musical.",
      "As producoes das criancas sao expostas em murais e apresentacoes para a comunidade escolar.",
      "O projeto valoriza imaginacao, escuta e colaboracao em processos criativos coletivos.",
    ],
  },
  {
    id: "brincando-aprendendo",
    title: "Brincando e Aprendendo",
    description: "O brincar como ferramenta pedagogica para o desenvolvimento motor, cognitivo e social das criancas.",
    tags: ["Ludico", "Desenvolvimento"],
    details: [
      "As atividades sao planejadas para promover resolucao de problemas e cooperacao.",
      "Brincadeiras orientadas contribuem para autonomia e autorregulacao das criancas.",
      "A observacao pedagogica garante acompanhamento individual e apoio as necessidades de cada turma.",
    ],
  },
];

export type ClassProject = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

export type ClassGroup = {
  id: string;
  name: string;
  projects: ClassProject[];
};

export const classGroups: ClassGroup[] = [
  {
    id: "turma-sol",
    name: "Turma do Sol",
    projects: [
      {
        id: "descobrindo-cores",
        title: "Descobrindo as Cores",
        description: "Exploracao sensorial e artistica das cores primarias e secundarias com brincadeiras e pinturas.",
        details: [
          "As criancas exploram tintas, colagens e materiais naturais para reconhecer cores e combinacoes.",
          "As atividades estimulam percepcao visual, linguagem e expressao criativa.",
        ],
      },
      {
        id: "pequenos-cientistas",
        title: "Pequenos Cientistas",
        description: "Experimentos simples que despertam curiosidade cientifica nas criancas.",
        details: [
          "Investigacoes praticas sobre agua, plantas e misturas fortalecem a curiosidade e a observacao.",
          "O projeto incentiva perguntas, hipoteses e registro coletivo das descobertas.",
        ],
      },
    ],
  },
  {
    id: "turma-lua",
    name: "Turma da Lua",
    projects: [
      {
        id: "animais-jardim",
        title: "Animais do Jardim",
        description: "Estudo e observacao de insetos e pequenos animais presentes no jardim da escola.",
        details: [
          "Passeios guiados no espaco externo ajudam as criancas a identificar diferentes especies.",
          "A proposta trabalha cuidado com a natureza e respeito aos seres vivos.",
        ],
      },
      {
        id: "musica-movimento",
        title: "Musica e Movimento",
        description: "Atividades com instrumentos e dancas da cultura brasileira para ampliar expressao corporal.",
        details: [
          "A turma explora ritmo, coordenacao e escuta por meio de jogos musicais.",
          "As praticas coletivas reforcam convivio, cooperacao e identidade cultural.",
        ],
      },
    ],
  },
  {
    id: "turma-estrelas",
    name: "Turma das Estrelas",
    projects: [
      {
        id: "receitas-vovo",
        title: "Receitas da Vovo",
        description: "Culinaria pedagogica com receitas das familias, trabalhando medidas, cooperacao e autonomia.",
        details: [
          "As criancas participam do preparo e organizacao dos ingredientes em atividades orientadas.",
          "O projeto integra matematica inicial, linguagem e trabalho em equipe.",
        ],
      },
    ],
  },
  {
    id: "turma-arco-iris",
    name: "Turma do Arco-Iris",
    projects: [
      {
        id: "nosso-bairro",
        title: "Nosso Bairro",
        description: "Conhecendo o bairro, sua historia e as pessoas que fazem parte da comunidade.",
        details: [
          "A turma mapeia pontos importantes do entorno e conversa sobre servicos da comunidade.",
          "As atividades ampliam pertencimento e cidadania desde a educacao infantil.",
        ],
      },
      {
        id: "contadores-historias",
        title: "Contadores de Historias",
        description: "Criacao de historias coletivas com ilustracoes feitas pelas proprias criancas.",
        details: [
          "As criancas elaboram personagens, cenarios e enredos em producoes coletivas.",
          "O projeto valoriza oralidade, imaginacao e trabalho colaborativo.",
        ],
      },
    ],
  },
];
