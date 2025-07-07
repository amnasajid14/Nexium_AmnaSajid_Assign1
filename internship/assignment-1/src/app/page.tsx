'use client';

import { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import QuoteList from '../components/QuoteList';
import quotesData from '../data/quotes.json';

export default function Home() {
  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);

  const handleGetQuotes = (topic: string) => {
    const matchedQuotes = quotesData
  .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
  .slice(0, 3)
  .map(q => ({ quote: q.quote, author: q.author }));


    setQuotes(matchedQuotes);

  };

  return (
  <main>
  <div
    className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10 transition-all duration-500"
    style={{ backgroundImage: "url('/images/hd-mountain.jpg')" }}
  >
    <div
      className={`w-full max-w-6xl mx-auto flex flex-col ${
        quotes.length > 0 ? 'lg:flex-row gap-8 items-start' : 'items-center'
      } transition-all duration-500`}
    >
      <div
  className={`bg-black/60 p-6 rounded-xl shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center ${
    quotes.length > 0 ? 'w-full lg:w-1/2 min-h-[400px]' : 'max-w-xl w-full'
  }`}
>
  <h1 className="text-3xl font-bold text-white mb-6">
    Quote Generator
  </h1>
  <QuoteForm onSubmit={handleGetQuotes} />
</div>


      {quotes.length > 0 && (
        <div className="bg-black/60 p-6 rounded-xl shadow-xl w-full lg:w-1/2 transition-all duration-500">
          <QuoteList quotes={quotes} />
        </div>
      )}
    </div>
  </div>
</main>

  );
}
