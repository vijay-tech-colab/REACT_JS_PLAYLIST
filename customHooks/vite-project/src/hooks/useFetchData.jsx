import React, { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = (url) => {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Something went wrong..");
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData(url);
  }, [url]);
  return {data, error ,loading}
}

export default useFetchData;
