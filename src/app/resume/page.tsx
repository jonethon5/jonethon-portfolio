import ResumeView from "./resume-view";
import { config } from "@/data/config";

export const metadata = {
  title: `Currículo | ${config.author}`,
  description: `Currículo de ${config.author} — Desenvolvedor Backend. Veja online ou baixe o PDF.`,
};

export default function ResumePage() {
  return <ResumeView />;
}
