import { useState, useEffect } from "react";
import api from "../services/api";

export default function useFetch<T = unknown>(url: string) {

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    try {
      const res = api
        .get(url)
        .then((response) => { console.log(response); setData(response.data) })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        })
    }
    catch (e) {
      console.log(e)
    }
  })

  return { data };
}