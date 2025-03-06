import { useEffect, useState } from "react";
import { client } from "../sanity/sanityClient";

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching tarot messages...");
    client
      .fetch(`*[_type == "tarotMessage"]{title, message}`)
      .then((data) => {
        console.log("Received data:", data);
        setMessages(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-6">
      <h1 className="text-2xl font-bold text-primary">Loveme Tarot 🔮</h1>

      {error ? (
        <p className="mt-4 text-red-600">Error: {error}</p>
      ) : isLoading ? (
        <p className="mt-4 text-gray-600">Loading tarot messages...</p>
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-semibold">{message.title}</h2>
            <p className="mt-2">{message.message}</p>
          </div>
        ))
      ) : (
        <p className="mt-4 text-gray-600">No tarot messages found.</p>
      )}
    </div>
  );
}

export default App;
