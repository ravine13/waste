// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { fetchSkipsByLocation } from "../service/api";
import SkipCard from "../components/SkipCard";

const Home = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkipsByLocation("NR32", "Lowestoft")
      .then((data) => setSkips(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Available Skips</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <SkipCard key={skip.id} skip={skip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
