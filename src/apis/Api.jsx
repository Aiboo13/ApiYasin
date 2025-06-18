import React, { useEffect, useState } from "react";

function YasinArab() {
  const [arabAyat, setArabAyat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah/36")
      .then((res) => res.json())
      .then((data) => {
        // Ambil hanya teks Arab dari setiap ayat
        const arabOnly = data.data.ayahs.map((ayat) => ({
          number: ayat.numberInSurah,
          text: ayat.text,
        }));
        setArabAyat(arabOnly);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal fetch ayat:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ayat...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Surah Yasin - Ayat Arab</h1>
      {arabAyat.map((ayat) => (
        <div key={ayat.number} className="mb-4 border-b pb-2">
          <h1 className="text-right text-2xl text-green-800" style={{ fontFamily: "'Scheherazade New', serif" }}>{ayat.text}</h1>
          <p className="text-sm text-gray-500 text-left">Ayat {ayat.number}</p>
        </div>
      ))}
    </div>
  );
}

export default YasinArab;
