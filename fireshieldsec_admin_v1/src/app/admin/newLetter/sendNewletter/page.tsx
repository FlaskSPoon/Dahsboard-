"use client";
import { useState } from 'react';

const SendNewsletter = () => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendNewsletter = async () => {
    if (!subject || !content) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    setSending(true);

    const response = await fetch('/api/send-newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, content }),
    });

    if (response.ok) {
      alert('Newsletter envoyée avec succès!');
    } else {
      alert('Erreur lors de l\'envoi de la newsletter.');
    }

    setSending(false);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl mb-2">Envoyer une nouvelle Newsletter</h2>
      <div className="mb-4">
        <label className="block">Objet de la Newsletter</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block">Contenu de la Newsletter</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={handleSendNewsletter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={sending}
      >
        {sending ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </div>
  );
};

export default SendNewsletter;
