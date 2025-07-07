'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function QuoteForm({ onSubmit }: { onSubmit: (topic: string) => void }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(topic);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 w-full max-w-2xl mx-auto text-center">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">Try these topics:</h2>
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
  {['Inspirational', 'Science', 'Peace'].map((topicName) => (
    <span
      key={topicName}
      className="badge bg-white/10 text-white rounded-full px-4 py-2 border border-white cursor-pointer"
      onClick={() => setTopic(topicName)}
    >
      {topicName.charAt(0).toUpperCase() + topicName.slice(1)}
    </span>
  ))}
</div>

      </div>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
  <Input
    type="text"
    placeholder="Enter a topic (e.g., Inspirational, Science, Peace)"
    value={topic}
    onChange={(e) => setTopic(e.target.value)}
    className="w-full sm:max-w-md bg-white/90 text-black placeholder-gray-500 rounded-md shadow"
  />
  </div>
   <div className="flex justify-center">
  <Button
    type="submit"
    className="btn bg-white text-black hover:bg-gray-400 shadow-md rounded-lg px-6 py-2 transition w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
  >
    Get Quotes
  </Button>
</div>

    </form>
  );
}

 
