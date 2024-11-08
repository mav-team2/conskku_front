import { useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  fetchData: (url: string, options: UseFetchOptions) => Promise<void>;
}

interface UseFetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function useFetch<T>(): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string, options: UseFetchOptions) => {
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
      console.log("get data", result);

      // delay for generating
      await delay(3000);

      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    }
  };

  return { data, error, fetchData };
}

export default useFetch;
