import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

    fetch(primaryUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Primary failed");
        return res.json();
      })
      .then((res) => setData(res[currency]))
      .catch(() => {
        fetch(fallbackUrl)
          .then((res) => res.json())
          .then((res) => setData(res[currency]))
          .catch((err) => console.error("Both APIs failed:", err));
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;