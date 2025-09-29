// app/hooks/useScrollAnimation.ts
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// This is a more robust version of the hook that accepts a GSAP timeline
export const useScrollAnimation = (
  triggerSelector: string,
  animationTimeline: gsap.core.Timeline
) => {
  useEffect(() => {
    const triggerElement = document.querySelector(triggerSelector);

    if (triggerElement) {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 80%",
        animation: animationTimeline,
        toggleActions: "play none none none",
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [triggerSelector, animationTimeline]);
};
