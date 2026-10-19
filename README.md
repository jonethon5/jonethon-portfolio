# Portfólio — Jonethon Coutinho

Portfólio pessoal de **Jonethon Coutinho Pereira**, desenvolvedor backend buscando vaga júnior, com foco em Node.js.

- GitHub: [github.com/jonethon5](https://github.com/jonethon5)
- LinkedIn: [linkedin.com/in/jonethon](https://www.linkedin.com/in/jonethon)
- Projeto em destaque: [Stock Ledger API](https://github.com/jonethon5/stock-ledger-api) — controle de estoque concorrente com transação + `SELECT ... FOR UPDATE` no PostgreSQL, provado por um teste com 50 débitos simultâneos.

## Rodando localmente

Requer Node.js 20.9+ e pnpm 11.

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde editar o conteúdo

| Arquivo | O que tem |
|---|---|
| `src/data/config.ts` | Nome, bio, e-mail, links e caminho do currículo |
| `src/data/constants.ts` | Teclas do teclado 3D, categorias de skills e experiência |
| `src/data/projects.tsx` | Projetos |
| `public/Jonethon_Coutinho_Pereira_CV.pdf` | Currículo do botão de download |

O formulário de contato envia e-mails pelo [Resend](https://resend.com) e precisa da variável de ambiente `RESEND_API_KEY` (no Vercel: Settings → Environment Variables). Sem ela, o formulário mostra uma mensagem pedindo para escrever direto por e-mail.

## Créditos

Baseado no template open source [3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio), de Naresh Khatri (licença MIT). Teclado 3D renderizado com [Chibi](https://chibi.nareshkhatri.dev).
