"use client"
import { useState, useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';

interface UseAuthSession {
  session: any | null;
  loading: boolean;
  error: unknown | null;
}

const useAuthSession = (): UseAuthSession => {
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await fetchAuthSession();
        setSession(session);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  return { session, loading, error };
};

export default useAuthSession;