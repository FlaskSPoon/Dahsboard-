"use client";
import { useEffect, useState } from 'react';

const NewsletterHistory = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    // Vous pouvez remplacer par un appel à une API ou une base de données
    const fetchNewsletterHistory = async () => {
      const response = await fetch('/api/get-newsletter-history');
      const data = await response.json();
      setNewsletters(data);
    };

    fetchNewsletterHistory();
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-xl mb-2">Historique des Newsletters</h2>
      <ul className="list-disc ml-4">
        {newsletters.length > 0 ? (
          newsletters.map((newsletter) => (
            <li key={newsletter.id} className="mb-2">
              <div>
                <strong>{newsletter.subject}</strong>
                <p className="text-sm text-gray-600">Envoyé le {newsletter.date}</p>
                <p className="text-sm">{newsletter.preview}</p>
                <a href={`/newsletters/${newsletter.id}`} className="text-blue-500">Voir le contenu complet</a>
              </div>
            </li>
          ))
        ) : (
          <li>Aucune newsletter envoyée pour le moment.</li>
        )}
      </ul>
    </div>
  );
};

export default NewsletterHistory;
