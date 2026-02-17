import { useState, useEffect } from "react";
export default function Quotes() {
  const quotes = [
    {
      text: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson",
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      text: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde",
    },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  ];

  const [quote, setQuote] = useState(null);
 
  useEffect(() => {
    const loadQuote = () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    loadQuote();
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-white mb-4">
        Quote of the Day
      </h2>
      <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center">
        <p className="text-white italic mb-3">
          "{quote?.text || "No quote available."}"
        </p>
        <p className="text-sm text-gray-300 mb-4">
          — {quote?.author || "Unknown"}
        </p>
      </div>
    </div>
  );
}
