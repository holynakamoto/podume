import { useState, useCallback } from 'react';

export function useLoading(initialState = false) {
  const [loading, setLoading] = useState(initialState);
  
  const withLoading = useCallback(async (fn: () => Promise<any>) => {
    try {
      setLoading(true);
      await fn();
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, setLoading, withLoading };
} 