'use client'

import { useState } from 'react';

export default function QuoteForm({ onSubmit }: { onSubmit: (topic: string) => void }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(topic);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
     <div className="mb-4 text-center">
  <h2 className="text-xl font-semibold text-white">Try these topics:</h2>
  <div className="flex justify-center gap-2 mt-2 flex-wrap">
    <span className="badge bg-white/10 text-white rounded-full px-4 py-2 border border-white">motivation</span>
    <span className="badge bg-white/10 text-white rounded-full px-4 py-2 border border-white">life</span>
    <span className="badge bg-white/10 text-white rounded-full px-4 py-2 border border-white">success</span>
  </div>
</div>



      <input
  type="text"
  placeholder="Enter a topic (e.g., life, success, motivation)"
  className="input w-full max-w-md bg-white/90 text-black placeholder-gray-500 border border-gray-300 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
  value={topic}
  onChange={(e) => setTopic(e.target.value)}
/>

      <button className="btn bg-white text-black hover:bg-gray-400 shadow-md rounded-lg px-6 py-2 transition">
  Get Quotes
</button>


    </form>
  );
}
