'use client'

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
    <main>
      <div
  className="hero w-full min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('/images/hd-mountain.jpg')",
  backgroundColor: "#000", // fallback

  }}
>
  <div className="hero-content flex flex-col items-center justify-center text-center px-4 sm:px-8">
    <div className="container mx-auto max-w-2xl mt-10">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center tracking-wider [text-shadow:_0_0_8px_rgba(255,255,255,0.6)]">
  Quote Generator
</h1>
      <QuoteForm onSubmit={handleGetQuotes} />
      {quotes.length > 0 && <QuoteList quotes={quotes} />}
    </div>
  </div>
</div>
    
    </main>
  );
}

