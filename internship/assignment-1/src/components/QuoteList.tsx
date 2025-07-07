import { FaQuoteLeft } from 'react-icons/fa';

export default function QuoteList({ quotes }: { quotes: string[] }) {
  const getHighlightColor = (quote: string) => {
    if (quote.toLowerCase().includes("motivation"));
    if (quote.toLowerCase().includes("life")) ;
    if (quote.toLowerCase().includes("success"));
    return "text-black";
  };

  return (
    <div className="grid gap-6 mt-6">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-xl shadow-lg p-6 border-2 border-gray-400 hover:border-indigo-500 hover:scale-[1.02] hover:shadow-xl transition-transform duration-300"
        >
          <div className="flex items-start gap-4">
            <FaQuoteLeft className="text-black text-2xl mt-1 opacity-60" />
            <p className={`text-lg font-medium leading-relaxed ${getHighlightColor(quote)}`}>
              {quote}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
