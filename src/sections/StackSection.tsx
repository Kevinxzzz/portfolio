"use client";

import { useState, useMemo } from "react";

import { StackGroup } from "@/components/stack/StackGroup";
import { StackUsage } from "@/components/stack/StackUsage";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionLayout } from "@/layouts/SectionLayout";
import { buildTechnologyIndex, findProjectsUsing } from "@/utils/technologies";

import styles from "./StackSection.module.scss";

export function StackSection() {
  const { dict } = useLanguage();
  const [activeTechnology, setActiveTechnology] = useState<string | null>(null);
  
  const technologyIndex = useMemo(() => buildTechnologyIndex(dict.projects), [dict.projects]);
  const usedBy = activeTechnology ? findProjectsUsing(technologyIndex, activeTechnology) : [];

  return (
    <SectionLayout id="stack" title={dict.ui.stackTitle} intro={dict.ui.stackIntro}>
      <div className={styles.groups}>
        {dict.stack.map((group) => (
          <StackGroup
            key={group.id}
            group={group}
            activeTechnology={activeTechnology}
            onSelect={setActiveTechnology}
          />
        ))}
      </div>

      <StackUsage projects={dict.projects} activeTechnology={activeTechnology} usedBy={usedBy} />
    </SectionLayout>
  );
}
