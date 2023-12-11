import { useEffect, useState } from 'react';

export const useOrigin = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location
      : '';

  if (!isMounted) {
    return '';
  }

  return origin;
};
