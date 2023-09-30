import { RefObject, useEffect, useState } from 'react';

export const useVisible = (
  upRef: RefObject<HTMLLIElement>,
  downRef: RefObject<HTMLLIElement>,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }
) => {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const {current: downElementRef} = downRef;

    if (downElementRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolling(entry.isIntersecting);

          if ( !isScrolling ) {
            setDirection(entry.isIntersecting ? 'down' : null);
          } else {
          }
        }, options
      );

      observer.observe(downElementRef);

      return () => observer.unobserve(downElementRef);
    }
  }, [downRef, options]);

  useEffect(() => {
    const {current: upElementRef} = upRef;

    if (upElementRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsScrolling(entry.isIntersecting);

          if ( !isScrolling ) {
            setDirection(entry.isIntersecting ? 'up' : null);
          } else {
          }
        }, options
      );

      observer.observe(upElementRef);

      return () => observer.unobserve(upElementRef);
    }
  }, [upRef, options]);

  return direction;
}
