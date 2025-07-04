import { quotes } from "../../../../data/quotes"; // ✅ correct



export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = params.topic.toLowerCase();
  const topicQuotes = quotes[topic];

  if (!topicQuotes) {
    return (
      <div className="p-6">
        <h2>No quotes found for "{topic}".</h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Quotes on {topic}</h2>
      <ul className="space-y-2">
        {topicQuotes.map((quote, index) => (
          <li key={index} className="p-4 bg-white shadow rounded">{quote}</li>
        ))}
      </ul>
    </div>
  );
}
