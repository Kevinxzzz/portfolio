"use client";

import { type RefObject, useState } from "react";

import { Button } from "@/components/ui/Button";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { useLanguage } from "@/i18n/LanguageContext";
import { SECTIONS } from "@/data/sections";
import { sectionClickHandler } from "@/lib/navigation-store";
import { DOM_ATTR } from "@/lib/dom";
import type { ResolvedAssets, SectionId } from "@/types";

import { CoreAvatar } from "./CoreAvatar";
import { HeaderControls } from "@/components/ui/HeaderControls";
import { CoreConnections } from "./CoreConnections";
import { CoreIdentity } from "./CoreIdentity";
import { CoreNode } from "./CoreNode";
import styles from "./CoreSystem.module.scss";

interface CoreSystemProps {
  homeRef: RefObject<HTMLDivElement | null>;
  cameraRef: RefObject<HTMLElement | null>;
  assets: ResolvedAssets;
  /** True while a section is open: the core is then unreachable for keyboard/AT. */
  inert: boolean;
}

/**
 * The home layer. `cameraRef` is the element the transitions zoom; chrome bars
 * sit outside of it and fade on their own (`data-chrome`).
 */
export function CoreSystem({ homeRef, cameraRef, assets, inert }: CoreSystemProps) {
  const { dict } = useLanguage();
  const [activeId, setActiveId] = useState<SectionId | null>(null);
  const chromeAttr = { [DOM_ATTR.chrome]: "" };

  return (
    <div ref={homeRef} className={styles.home} inert={inert}>
      <header className={styles.bar} {...chromeAttr}>
        <StatusIndicator>{dict.profile.availability}</StatusIndicator>
        <HeaderControls />
      </header>

      <main ref={cameraRef} className={styles.camera}>
        <div className={styles.stage}>
          <CoreConnections activeId={activeId} />

          <div className={styles.core}>
            <CoreAvatar name={dict.profile.name} alt={dict.profile.photoAlt} photo={assets.photo} />
            <CoreIdentity
              name={dict.profile.name}
              role={dict.profile.role}
              cvHref={assets.cv}
              downloadLabel={dict.ui.downloadCV}
            />
          </div>

          <nav aria-label="Portfolio sections" className={styles.nav}>
            <ul className={styles.nodes}>
              {SECTIONS.map((section, order) => (
                <CoreNode
                  key={section.id}
                  section={section}
                  order={order}
                  active={activeId === section.id}
                  onActiveChange={(active) => setActiveId(active ? section.id : null)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </main>

      <footer className={styles.bar} {...chromeAttr}>
        <div className={styles.actions}>
          <Button
            href="#contact"
            variant="solid"
            onClick={sectionClickHandler("contact")}
          >
            {dict.ui.getInTouch}
          </Button>
        </div>
      </footer>
    </div>
  );
}
