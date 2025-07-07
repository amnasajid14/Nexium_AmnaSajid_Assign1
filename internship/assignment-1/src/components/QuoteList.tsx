import { FaQuoteLeft } from 'react-icons/fa';

export default function QuoteList({
  quotes,
}: {
  quotes: { quote: string; author: string }[];
}) {
  const getHighlightColor = (quote: string) => {
    if (quote.toLowerCase().includes("happiness")) return "text-black";
    if (quote.toLowerCase().includes("wisdom")) return "text-black";
    if (quote.toLowerCase().includes("courage")) return "text-black";
    return "text-black";
  }; 

  return (
    <div className="grid gap-4">
  {quotes.map((quoteObj, index) => (
    <div
      key={index}
      className="bg-white/90 rounded-md shadow p-4 text-black text-sm"
    >
      <div className="flex gap-3 items-start">
        <FaQuoteLeft className="text-gray-500 mt-1" />
        <div>
          <p className={`leading-snug ${getHighlightColor(quoteObj.quote)}`}>
  {quoteObj.quote}
</p>
          <p className="mt-2 text-right italic text-gray-600 text-xs">— {quoteObj.author}</p>
        </div>
      </div>
    </div>
  ))}
</div>

  );
}
