"use client";
import { useState, useEffect } from "react";

const useIntersection = (
  targetSelector: string,
  options: { thresholds?: number[] } = {}
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: options.thresholds || [0] } // Default to [0] if no thresholds provided
    );

    const target = document.querySelector(targetSelector);
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [targetSelector, options.thresholds]); // Include options.thresholds in the dependency array

  return isIntersecting;
};

export default useIntersection;
