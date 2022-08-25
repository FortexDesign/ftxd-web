import { useEffect, useState,RefObject } from "react"
// This hook check if the element is visible on the viewport

export default function useOnScreen(element, rootMargin) {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {


              setState(entry.isIntersecting);
          }, { rootMargin }

          
      );

      element.current && observer.observe(element.current);

      return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
}







