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
    <main className="relative min-h-screen w-full overflow-hidden">
  {/* Background image layer */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/hd-mountain.jpg')",
      backgroundColor: '#000',
    }}
  />

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  {/* Content layer */}
  <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
    <div className="text-center text-white w-full max-w-2xl">
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
