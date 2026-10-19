import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  knex: brand("Knex", "knexdotjs-mono.svg"),
  jest: brand("Jest", "jest-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "stock-ledger-api",
    category: "API REST · Backend",
    title: "Stock Ledger API",
    src: "/assets/projects-screenshots/stock-ledger-api/readme.png",
    screenshots: ["readme.png"],
    live: "#",
    github: "https://github.com/jonethon5/stock-ledger-api",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.knex,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.jest,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl md:text-2xl text-center">
            Controle de estoque que não erra o saldo quando várias vendas chegam
            ao mesmo tempo.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">O problema</TypographyH3>
          <p className="font-mono mb-2">
            Debitar estoque parece simples: ler o saldo, conferir se é
            suficiente e gravar o novo valor. Mas quando duas vendas do mesmo
            produto chegam juntas, as duas leem o mesmo saldo antigo e uma
            sobrescreve a outra — uma race condition real, que faz o estoque
            divergir das vendas.
          </p>

          <TypographyH3 className="my-4 mt-8">A solução</TypographyH3>
          <p className="font-mono mb-2">
            O débito roda dentro de uma transação no PostgreSQL, e a leitura do
            produto usa <code>SELECT ... FOR UPDATE</code>. A linha fica
            travada até o commit, então débitos concorrentes do mesmo produto
            viram uma fila: cada um só lê o saldo depois que o anterior terminou
            de gravar. Se algo falha no meio, o rollback desfaz o débito e a
            movimentação juntos.
          </p>
          <pre className="font-mono text-xs md:text-sm bg-secondary/40 border border-border rounded-lg p-4 my-4 whitespace-pre-wrap break-words">
            {`// trecho simplificado de debitarEstoque
return pg.transaction(async (trx) => {
  const produto = await trx("produtos")
    .where("id", produtoId)
    .forUpdate() // SELECT ... FOR UPDATE
    .first();
  // confere o saldo, atualiza e registra a movimentação
});`}
          </pre>

          <TypographyH3 className="my-4 mt-8">A prova</TypographyH3>
          <p className="font-mono mb-2">
            Um teste de integração com Jest dispara 50 débitos simultâneos no
            mesmo produto, contra um PostgreSQL real (sem mocks), e confere que
            o saldo final é exatamente o esperado — sem nenhum erro de saldo. O
            histórico de movimentações é append-only, garantido por trigger no
            banco, e a suíte roda no GitHub Actions a cada push.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/stock-ledger-api/readme.png`]}
          />
        </div>
      );
    },
  },
];
export default projects;
