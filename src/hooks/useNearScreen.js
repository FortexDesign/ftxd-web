import { useEffect, useState, RefObject } from "react";
// This hook check if the element is visible on the viewport

export default function useOnScreen(element, rootMargin) {
  const [isVisible, setState] = useState(false);

  /* Detect if an element is in the viewport and set the states to return */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
}
