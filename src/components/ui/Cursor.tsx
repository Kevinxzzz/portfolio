"use client";

import { useEffect, useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FINE_POINTER_QUERY } from "@/lib/media";

import styles from "./Cursor.module.scss";

const INTERACTIVE = "a, button, [data-cursor]";
const RING_LERP = 0.18;

/**
 * Discreet cursor: a 6px dot that follows instantly and a ring that trails it.
 * Fine pointers only; touch devices keep the native behaviour.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const finePointer = useMediaQuery(FINE_POINTER_QUERY);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!finePointer || !dot || !ring) return;

    const root = document.documentElement;
    const target = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    const lerp = reducedMotion ? 1 : RING_LERP;
    let frame = 0;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const tick = () => {
      ringPos.x += (target.x - ringPos.x) * lerp;
      ringPos.y += (target.y - ringPos.y) * lerp;
      place(ring, ringPos.x, ringPos.y);

      const settled =
        Math.abs(target.x - ringPos.x) < 0.1 && Math.abs(target.y - ringPos.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      if (!root.classList.contains("cursor-on")) {
        ringPos.x = event.clientX;
        ringPos.y = event.clientY;
        root.classList.add("cursor-on");
      }
      target.x = event.clientX;
      target.y = event.clientY;
      place(dot, target.x, target.y);
      dot.dataset.visible = ring.dataset.visible = "true";
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onOver = (event: PointerEvent) => {
      const hovering = (event.target as Element | null)?.closest(INTERACTIVE) !== null;
      ring.dataset.state = hovering ? "active" : "idle";
    };

    const onLeaveWindow = (event: MouseEvent) => {
      if (event.relatedTarget === null) dot.dataset.visible = ring.dataset.visible = "false";
    };

    const onDown = () => (ring.dataset.pressed = "true");
    const onUp = () => (ring.dataset.pressed = "false");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("mouseout", onLeaveWindow);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("cursor-on");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseout", onLeaveWindow);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
    };
  }, [finePointer, reducedMotion]);

  if (!finePointer) return null;

  return (
    <>
      <div ref={ringRef} className={styles.ring} data-state="idle" aria-hidden="true">
        <span className={styles.ringShape} />
      </div>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}
