"use client";

import { useState } from "react";

import { StackGroup } from "@/components/stack/StackGroup";
import { StackUsage } from "@/components/stack/StackUsage";
import { projects } from "@/data/projects";
import { stackGroups } from "@/data/stack";
import { SectionLayout } from "@/layouts/SectionLayout";
import { buildTechnologyIndex, findProjectsUsing } from "@/utils/technologies";

import styles from "./StackSection.module.scss";

const technologyIndex = buildTechnologyIndex(projects);

export function StackSection() {
  const [activeTechnology, setActiveTechnology] = useState<string | null>(null);
  const usedBy = activeTechnology ? findProjectsUsing(technologyIndex, activeTechnology) : [];

  return (
    <SectionLayout id="stack" title="Stack" intro="Tecnologias agrupadas pela função que exercem.">
      <div className={styles.groups}>
        {stackGroups.map((group) => (
          <StackGroup
            key={group.id}
            group={group}
            activeTechnology={activeTechnology}
            onSelect={setActiveTechnology}
          />
        ))}
      </div>

      <StackUsage projects={projects} activeTechnology={activeTechnology} usedBy={usedBy} />
    </SectionLayout>
  );
}
