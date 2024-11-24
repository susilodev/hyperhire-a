'use client';

import { useState, useEffect, useRef } from 'react';

const useElementWidth = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(() => updateWidth());
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { ref: elementRef, width };
};

export default useElementWidth;
