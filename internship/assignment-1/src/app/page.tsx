'use client';

import { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import QuoteList from '../components/QuoteList';
import quotesData from '../data/quotes.json';

export default function Home() {
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleGetQuotes = (topic: string) => {
    const matchedQuotes = quotesData
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.quote);

    setQuotes(matchedQuotes);
  };

  return (
    <main className="min-h-screen">
      <div
        className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-4"
        style={{
           backgroundImage: "url('/images/green-mountain-image.jpg')",
          backgroundColor: '#000',
        }}
      >
        <div className="w-full max-w-2xl text-center text-white">
          <h1 className="text-4xl font-extrabold mb-6 tracking-wide [text-shadow:_0_0_8px_rgba(255,255,255,0.6)]">
            Quote Generator
          </h1>
          <QuoteForm onSubmit={handleGetQuotes} />
          {quotes.length > 0 && <QuoteList quotes={quotes} />}
        </div>
      </div>
    </main>
  );
}
