"use client";

import { type ReactNode, useRef } from "react";

import { CoreSystem } from "@/components/core/CoreSystem";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { Navigation } from "@/components/navigation/Navigation";
import { Cursor } from "@/components/ui/Cursor";
import { useActiveView } from "@/hooks/useActiveView";
import { useGlobalShortcuts } from "@/hooks/useGlobalShortcuts";
import { useSystemTransition } from "@/hooks/useSystemTransition";
import type { ResolvedAssets } from "@/types";

import styles from "./SystemLayout.module.scss";

interface SystemLayoutProps {
  assets: ResolvedAssets;
  /** The section slots (server-rendered). Only the active one is displayed. */
  children: ReactNode;
}

/**
 * Two stacked layers: the core (home) and the section overlay. The view lives
 * in the URL hash; `useSystemTransition` plays the camera move between them.
 */
export function SystemLayout({ assets, children }: SystemLayoutProps) {
  const view = useActiveView();
  const homeRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isCore = view === "core";

  useGlobalShortcuts();
  useSystemTransition({ view, homeRef, cameraRef, overlayRef });

  return (
    <>
      <CoreSystem homeRef={homeRef} cameraRef={cameraRef} assets={assets} inert={!isCore} />

      <div ref={overlayRef} className={styles.overlay} inert={isCore}>
        <Navigation view={view} />
        <div className={styles.content}>{children}</div>
        <MobileNavigation view={view} />
      </div>

      <Cursor />
    </>
  );
}
