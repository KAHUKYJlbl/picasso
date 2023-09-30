import { RefObject, useEffect, useState } from 'react';

export const useVirtual = (
  upRef: RefObject<HTMLLIElement>,
  downRef: RefObject<HTMLLIElement>,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }
) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (upRef.current) {
      const upObserver = new IntersectionObserver(
        ([entry]) => setCurrentPage((current) => {
          console.log(current);
          return entry.isIntersecting && current !== 0
          ? current - 1
          : current
        }), options
      );

      upObserver.observe(upRef.current);
    }

    if (downRef.current) {
      const downObserver = new IntersectionObserver(
        ([entry]) => setCurrentPage((current) => {
          console.log(current);
          return entry.isIntersecting
          ? current + 1
          : current
        }), options
      );

      downObserver.observe(downRef.current);
    }
  }, [upRef, downRef, options]);

  return currentPage;
}
