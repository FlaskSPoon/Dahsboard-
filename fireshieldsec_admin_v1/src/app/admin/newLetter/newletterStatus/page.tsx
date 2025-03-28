"use client";
import { useEffect, useState } from 'react';

const NewsletterStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Récupérer les stats via une API ou directement depuis l'outil d'envoi
    const fetchStats = async () => {
      const response = await fetch('/api/newsletter-stats');
      const data = await response.json();
      setStats(data);
    };

    fetchStats();
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-xl mb-2">Statistiques des Newsletters</h2>
      {stats ? (
        <div>
          <p>Taux d'ouverture: {stats.openRate}%</p>
          <p>Taux de clics: {stats.clickRate}%</p>
        </div>
      ) : (
        <p>Aucune statistique disponible.</p>
      )}
    </div>
  );
};

export default NewsletterStats;
