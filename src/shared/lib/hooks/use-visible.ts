import { RefObject, useEffect, useState } from 'react';

export const useVisible = (
  ref: RefObject<HTMLLIElement>,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const {current: elementRef} = ref;

    if (elementRef) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting), options
      );

      observer.observe(elementRef);

      return () => observer.unobserve(elementRef);
    }
  }, [ref, options]);

  return isVisible;
}
