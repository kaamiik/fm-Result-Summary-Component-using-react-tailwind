import { useState, useEffect } from 'react';
import ResultSection from './ResultSection';
import SummarySection from './SummarySection';

async function fetchData() {
  try {
    const response = await fetch('/data/data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
}

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="flex flex-1 sm:items-start md:items-center md:p-4">
      <div className="bg-white text-base sm:container md:container sm:mx-auto sm:grid sm:text-lg md:mx-auto md:grid-cols-2 md:rounded-3xl">
        <ResultSection data={data} />
        <SummarySection data={data} />
      </div>
    </main>
  );
}

export default Main;
