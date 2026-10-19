export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  KNEX = "knex",
  MYSQL = "mysql",
  SEQUELIZE = "sequelize",
  JEST = "jest",
  DOCKER = "docker",
  GITHUB_ACTIONS = "github-actions",
  GIT = "git",
  VSCODE = "vscode",
  CLAUDE_CODE = "claude-code",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Extra classes for the HTML icon, e.g. dark:invert for black logos. */
  iconClassName?: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "a linguagem por trás de tudo que eu construo",
    color: "#f0db4f",
    icon: `${DEVICON}/javascript/javascript-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/js.svg",
    keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "adotado no backend de um projeto do estágio",
    color: "#007acc",
    icon: `${DEVICON}/typescript/typescript-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/ts.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "estrutura das interfaces do ERP",
    color: "#e34c26",
    icon: `${DEVICON}/html5/html5-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/html.svg",
    keyboardColor: "#ff480a",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "estilo e layout das interfaces",
    color: "#563d7c",
    icon: `${DEVICON}/css3/css3-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/css.svg",
    keyboardColor: "#633595",
  },
  [SkillNames.NODEJS]: {
    id: 5,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "APIs REST, jobs agendados e integrações",
    color: "#6cc24a",
    icon: `${DEVICON}/nodejs/nodejs-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/nodejs.svg",
    keyboardColor: "#00952c",
  },
  [SkillNames.EXPRESS]: {
    id: 6,
    name: "express",
    label: "Express",
    shortDescription: "rotas, middlewares e APIs REST",
    color: "#fff",
    icon: `${DEVICON}/express/express-original.svg`,
    iconClassName: "dark:invert",
    keyboardIcon: "/assets/keyboard/logos/express.svg",
    keyboardColor: "#343638",
  },
  [SkillNames.POSTGRES]: {
    id: 7,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "transações e SELECT FOR UPDATE no Stock Ledger",
    color: "#336791",
    icon: `${DEVICON}/postgresql/postgresql-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/postgres.svg",
    keyboardColor: "#146888",
  },
  [SkillNames.KNEX]: {
    id: 8,
    name: "knex",
    label: "Knex",
    shortDescription: "query builder e migrations no Stock Ledger",
    color: "#d26b38",
    icon: `${DEVICON}/knexjs/knexjs-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/knex.svg",
    keyboardColor: "#d26b38",
  },
  [SkillNames.MYSQL]: {
    id: 9,
    name: "mysql",
    label: "MySQL / MariaDB",
    shortDescription: "banco do ERP em produção no estágio",
    color: "#00758f",
    icon: `${DEVICON}/mysql/mysql-original.svg`,
    iconClassName: "dark:brightness-[2.5]",
    keyboardIcon: "/assets/keyboard/logos/mysql.svg",
    keyboardColor: "#00758f",
  },
  [SkillNames.SEQUELIZE]: {
    id: 10,
    name: "sequelize",
    label: "Sequelize",
    shortDescription: "ORM do ERP em produção no estágio",
    color: "#52b0e7",
    icon: `${DEVICON}/sequelize/sequelize-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/sequelize.svg",
    keyboardColor: "#2f7fc0",
  },
  [SkillNames.JEST]: {
    id: 11,
    name: "jest",
    label: "Jest",
    shortDescription: "testes de integração contra um banco real, sem mocks",
    color: "#c21325",
    icon: `${DEVICON}/jest/jest-plain.svg`,
    keyboardIcon: "/assets/keyboard/logos/jest.svg",
    keyboardColor: "#c21325",
  },
  [SkillNames.DOCKER]: {
    id: 12,
    name: "docker",
    label: "Docker",
    shortDescription: "ambientes reproduzíveis com Docker Compose",
    color: "#2496ed",
    icon: `${DEVICON}/docker/docker-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.GITHUB_ACTIONS]: {
    id: 13,
    name: "github-actions",
    label: "GitHub Actions",
    shortDescription: "CI/CD com migrations e deploy automatizados",
    color: "#2088ff",
    icon: `${DEVICON}/githubactions/githubactions-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/githubactions.svg",
    keyboardColor: "#2088ff",
  },
  [SkillNames.GIT]: {
    id: 14,
    name: "git",
    label: "Git",
    shortDescription: "branches por feature, Pull Requests e code review",
    color: "#f1502f",
    icon: `${DEVICON}/git/git-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.VSCODE]: {
    id: 15,
    name: "vscode",
    label: "VS Code",
    shortDescription: "editor do dia a dia",
    color: "#007acc",
    icon: `${DEVICON}/vscode/vscode-original.svg`,
    keyboardIcon: "/assets/keyboard/logos/vscode.svg",
    keyboardColor: "#007acc",
  },
  [SkillNames.CLAUDE_CODE]: {
    id: 16,
    name: "claude-code",
    label: "Claude Code",
    shortDescription: "assistente de IA no terminal para programar",
    color: "#d97757",
    icon: "/assets/logos/claude-color.svg",
    keyboardIcon: "/assets/keyboard/logos/claude.svg",
    keyboardColor: "#d97757",
  },
};

export type SkillCategory = {
  title: string;
  /** Optional context line, e.g. which project a stack comes from. */
  note?: string;
  /** Skills with a logo, or plain labels for concepts without one. */
  items: (SkillNames | { label: string })[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  { title: "Linguagem", items: [SkillNames.JS, SkillNames.TS] },
  { title: "Backend", items: [SkillNames.NODEJS, SkillNames.EXPRESS] },
  {
    title: "Banco de dados e ORM",
    note: "PostgreSQL + Knex no Stock Ledger · MySQL/MariaDB + Sequelize no estágio",
    items: [
      SkillNames.POSTGRES,
      SkillNames.KNEX,
      SkillNames.MYSQL,
      SkillNames.SEQUELIZE,
    ],
  },
  {
    title: "Autenticação e integrações",
    items: [
      { label: "OAuth" },
      { label: "Webhooks" },
      { label: "bcrypt" },
      { label: "express-session" },
    ],
  },
  {
    title: "Automação e infra",
    items: [
      { label: "node-cron" },
      SkillNames.DOCKER,
      { label: "Docker Compose" },
      SkillNames.GITHUB_ACTIONS,
      SkillNames.GIT,
    ],
  },
  { title: "Testes", items: [SkillNames.JEST] },
  { title: "Frontend básico", items: [SkillNames.HTML, SkillNames.CSS] },
  {
    title: "Ferramentas",
    items: [SkillNames.VSCODE, SkillNames.CLAUDE_CODE],
  },
];

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Atual",
    title: "Estagiário de Desenvolvimento de Software",
    company: "Marcos Vinicius Figueredo Martins",
    description: [
      "Desenvolvimento e manutenção de um ERP multi-loja em produção (Node.js/Express, arquitetura em camadas) para gestão de vendas, estoque, anúncios e logística.",
      "Integrações com a Shopee Open Platform API e a TikTok Shop Open API — OAuth, webhooks, renovação automática de tokens e sincronização de vendas, pedidos e preços via jobs agendados.",
      "Modelagem de banco relacional (MySQL/MariaDB) com Sequelize, incluindo a fila de associação para reconciliação de catálogo entre plataformas.",
      "Automação do orçamento de campanhas de ADS da Shopee, substituindo um processo manual repetido até 9 vezes por dia em 11 lojas.",
      "Autenticação por sessão (express-session + bcrypt) com controle de acesso por perfil de usuário.",
      "Ambiente de desenvolvimento containerizado com Docker e Docker Compose, replicando a versão de banco usada em produção.",
      "Pipeline de CI/CD com GitHub Actions e migrations automatizadas, reduzindo o deploy de 10–15 minutos para menos de 1 minuto.",
    ],
    skills: [
      SkillNames.NODEJS,
      SkillNames.TS,
      SkillNames.EXPRESS,
      SkillNames.MYSQL,
      SkillNames.SEQUELIZE,
      SkillNames.DOCKER,
      SkillNames.GITHUB_ACTIONS,
      SkillNames.JEST,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Atenção: o modo claro emite uma quantidade absurda de lúmens!",
    "Cuidado: modo claro à frente! Não tente isso em casa.",
    "Só profissionais treinados aguentam tanto brilho. Prossiga de óculos escuros!",
    "Prepare-se! O modo claro vai deixar tudo mais brilhante que o seu futuro.",
    "Ativando o modo claro... Tem certeza de que seus olhos estão prontos?",
  ],
  dark: [
    "Modo claro? Achei que você tinha enlouquecido... bem-vindo de volta ao lado escuro!",
    "Voltando para o modo escuro... Como foi a vida do lado claro?",
    "Modo escuro ativado! Meus olhos agradecem.",
    "Bem-vindo de volta às sombras. Como foi lá fora, na luz?",
    "Modo escuro ligado! Finalmente alguém que entende de sofisticação.",
  ],
};
