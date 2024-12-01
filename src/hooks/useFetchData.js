// src/hooks/useFetchData.js
import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Contoh data dummy Bahasa Indonesia
        const result = [
          {
            id: 1,
            title: 'Belajar Pemrograman',
            body: 'Pemrograman adalah keterampilan penting di era digital.',
          },
          {
            id: 2,
            title: 'Manfaat Olahraga',
            body: 'Olahraga teratur dapat meningkatkan kesehatan tubuh.',
          },
          {
            id: 3,
            title: 'Pentingnya Membaca Buku',
            body: 'Membaca buku memperkaya wawasan dan meningkatkan pengetahuan.',
          },
        ];
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetchData;
