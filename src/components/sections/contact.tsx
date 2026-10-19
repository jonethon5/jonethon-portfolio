"use client";
import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          VAMOS <br />
          CONVERSAR
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Contato</CardTitle>
            <CardDescription>
              Estou buscando minha primeira vaga como desenvolvedor backend
              júnior. Mande uma mensagem pelo formulário ou fale comigo
              direto por e-mail ou LinkedIn.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <ContactForm />
            <div className="my-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              ou fale direto
              <span className="h-px flex-1 bg-border" />
            </div>
            <Link href={`mailto:${config.email}`} className="w-full">
              <Button variant={"outline"} className="w-full gap-3">
                <Mail size={20} className="shrink-0" />
                Enviar e-mail
              </Button>
            </Link>
            <p className="text-center text-sm text-muted-foreground break-all select-all">
              {config.email}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link href={config.social.linkedin} target="_blank">
                <Button variant={"outline"} className="w-full gap-2">
                  <SiLinkedin size={18} />
                  LinkedIn
                </Button>
              </Link>
              <Link href={config.social.github} target="_blank">
                <Button variant={"outline"} className="w-full gap-2">
                  <SiGithub size={18} />
                  GitHub
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
