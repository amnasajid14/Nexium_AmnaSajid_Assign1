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
          <span className="badge bg-white/10 text-white rounded-full px-4 py-2 border border-white">motivation</span>
          <span className="badge bg-white/10 text-white rounded-full px-4 py-2 border border-white">life</span>
          <span className="badge bg-white/10 text-white rounded-full px-4 py-2 border border-white">success</span>
        </div>
      </div>

    <div className="flex flex-col gap-4 w-full items-center">
  <Input
    type="text"
    placeholder="Enter a topic (e.g., motivation, life, success)"
    value={topic}
    onChange={(e) => setTopic(e.target.value)}
    className="w-[500px] max-w-2xl bg-white/90 text-black placeholder-gray-500"
  />
  <Button
    type="submit"
    className="btn bg-white text-black hover:bg-gray-400 shadow-md rounded-lg px-6 py-2 transition w-fit"
  >
    Get Quotes
  </Button>
</div>


    </form>
  );
}



 
