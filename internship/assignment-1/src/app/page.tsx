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
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url('/images/hd-mountain.jpg')",
  }}
>
  <div className="hero"></div> 
  <div className="hero-content text-neutral-content text-center">
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

