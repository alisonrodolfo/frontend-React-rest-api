import { useState, useEffect } from "react";
import api from "../services/api";

export default function useFetch<T = unknown>(url: string) {

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(  () => {
    try {
      const res =  api
        .get(url)
        .then((response) => { setData(response.data) })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          setError(err);
        })
    }
    catch (e) {
      setLoading(false);
    }
  })

  return { data, error, loading };
}