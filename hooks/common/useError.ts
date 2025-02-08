import { useState, useCallback } from 'react';

export function useError() {
  const [error, setError] = useState<string | null>(null);
  
  const handleError = useCallback((err: unknown) => {
    setError(err instanceof Error ? err.message : 'An error occurred');
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { error, setError, handleError, clearError };
} 