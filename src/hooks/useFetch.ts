import { useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string, options: UseFetchOptions) => Promise<void>;
}

interface UseFetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
}

function useFetch<T>(): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string, options: UseFetchOptions) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: options.method || "GET",
        headers: options.headers || {},
        body: JSON.stringify(options.body),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

export default useFetch;
