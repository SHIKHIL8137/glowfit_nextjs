"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Configure ScrollTrigger with optimized settings
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    const setupSmoothScrolling = () => {
      // Kill existing triggers to prevent duplicates
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const root = document.documentElement;
      root.style.setProperty("--scroll-behavior", "smooth");

      document.body.classList.add("smooth-scroll");

      const style = document.createElement("style");
      style.textContent = `
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
      `;
      document.head.appendChild(style);

      // Return cleanup function
      return () => {
        // Thoroughly clean up ScrollTrigger instances
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill();
        });
        
        // Clear all ScrollTrigger data
        ScrollTrigger.clearMatchMedia();
        
        document.body.classList.remove("smooth-scroll");

        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    };

    const cleanup = setupSmoothScrolling();

    // Refresh ScrollTrigger on load and resize for better performance
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
      cleanup();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;