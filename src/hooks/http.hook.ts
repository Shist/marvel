import { useState, useCallback } from "react";

export const useHttp = () => {
  const [process, setProcess] = useState<string>("waiting");

  const request = useCallback(
    async (
      url: string,
      method: "GET" | "POST" = "GET",
      body: BodyInit | null = null,
      headers: { "Content-type": string } = {
        "Content-type": "application/json",
      }
    ) => {
      setProcess("loading");
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = await response.json(); // If we don't trust our server, we can add here "unknown" and additional checks later
        return data;
      } catch (e) {
        setProcess("error");
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setProcess("loading");
  }, []);

  return { request, clearError, process, setProcess };
};
