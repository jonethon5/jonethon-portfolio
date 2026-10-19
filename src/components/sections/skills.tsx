"use client";

import { useEffect, type CSSProperties } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS, SKILL_CATEGORIES } from "@/data/constants";
import { usePerfProfile } from "@/hooks/use-perf-profile";
import { cn } from "@/lib/utils";
import { useSceneStatus } from "@/lib/scene-health";

/**
 * Skills are visible HTML until the keyboard scene is ready, and remain
 * available to assistive technology while the 3D keyboard is displayed.
 * Reduced motion, unavailable WebGL and scene failures keep the grid visible.
 */
const SkillsSection = () => {
  const { disable3D, ready } = usePerfProfile();
  const sceneStatus = useSceneStatus();
  const showGrid = !ready || disable3D || sceneStatus !== "ready";

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [showGrid]);

  return (
    <>
      <SectionWrapper
        id="skills"
        className={showGrid
          ? "flex w-full min-h-screen flex-col justify-center py-24"
          : "w-full h-screen md:h-[150dvh] pointer-events-none"}
      >
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc={showGrid ? "Tecnologias com que trabalho" : "(dica: aperte uma tecla)"}
          className={showGrid ? "static mb-14" : undefined}
        />
        {showGrid ? (
          <SkillCategories />
        ) : (
          <ul className="sr-only">
            {Object.values(SKILLS).map((skill) => (
              <li key={skill.name}>{skill.label}</li>
            ))}
          </ul>
        )}
      </SectionWrapper>
      {!showGrid && (
        <div className="relative w-full pb-24">
          <SkillCategories />
        </div>
      )}
    </>
  );
};

/** Skills grouped by category, shared by the 3D and fallback layouts. */
const SkillCategories = () => (
  <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
    {SKILL_CATEGORIES.map((category) => (
      <div
        key={category.title}
        className={cn(
          // the section sits inside `.canvas-overlay-mode` (pointer-events
          // disabled so the 3D canvas can be clicked through); re-enable on
          // the card so hover works.
          "pointer-events-auto",
          "rounded-2xl border border-border/60 bg-background/85 p-5 backdrop-blur-md"
        )}
      >
        <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {category.title}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {category.items.map((item) => {
            const skill = typeof item === "string" ? SKILLS[item] : null;
            const label = skill ? skill.label : (item as { label: string }).label;
            return (
              <li
                key={label}
                style={skill ? ({ "--skill": skill.color } as CSSProperties) : undefined}
                className={cn(
                  "group flex items-center gap-2 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5",
                  "transition-[border-color,background-color] duration-300",
                  "hover:border-[var(--skill,hsl(var(--foreground)/0.4))] hover:bg-secondary/50"
                )}
              >
                {skill && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={skill.icon}
                    alt=""
                    width={20}
                    height={20}
                    loading="lazy"
                    className={cn("size-5 object-contain", skill.iconClassName)}
                  />
                )}
                <span className="text-sm text-foreground/80 group-hover:text-foreground">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
        {category.note && (
          <p className="mt-3 text-xs text-muted-foreground">{category.note}</p>
        )}
      </div>
    ))}
  </div>
);

export default SkillsSection;
