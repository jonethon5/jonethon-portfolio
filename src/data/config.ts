const config = {
  title: "Jonethon Coutinho | Desenvolvedor Backend Node.js",
  description: {
    long: "Portfólio de Jonethon Coutinho, desenvolvedor backend buscando vaga júnior, com foco em Node.js e TypeScript. Experiência com APIs REST em Node.js/Express, PostgreSQL, Knex, Docker e testes automatizados com Jest.",
    short:
      "Desenvolvedor backend buscando vaga júnior, com foco em Node.js e TypeScript.",
  },
  keywords: [
    "Jonethon Coutinho",
    "Jonethon Coutinho Pereira",
    "portfólio",
    "desenvolvedor backend",
    "desenvolvedor júnior",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Knex",
    "Docker",
    "Jest",
    "APIs REST",
  ],
  author: "Jonethon Coutinho",
  email: "jonethon.coutinho95@hotmail.com",
  site: "https://jonethon-portfolio.vercel.app",

  // for github stars button
  githubUsername: "jonethon5",
  githubRepo: "stock-ledger-api",

  // Currículo servido de /public
  resume: "/Jonethon_Coutinho_Pereira_CV.pdf",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/jonethon",
    github: "https://github.com/jonethon5",
  },
};
export { config };
