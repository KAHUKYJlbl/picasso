import { useEffect, useState } from 'react';

import { RefListElement } from '../lib/types';

export const useVirtual = (
  refList: RefListElement[],
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }
) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    refList.forEach((elementRef) => {
      if (elementRef.element) {
        const observer = new IntersectionObserver(
          ([entry]) => setCurrentPage((current) => entry.isIntersecting ? elementRef.page : current), options
        );

        observer.observe(elementRef.element);
      }
    });

  }, [refList, options]);

  return currentPage;
}
