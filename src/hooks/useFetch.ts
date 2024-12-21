import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T>(() => [] as unknown as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setData(result.data || ([] as unknown as T));
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
