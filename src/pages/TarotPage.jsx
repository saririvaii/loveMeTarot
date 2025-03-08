import { useEffect, useState } from "react";
import { client } from "../../sanity/sanityClient";
import TarotCards from "../components/TarotCards";

function TarotPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "tarotMessage"]{title, message}`)
      .then((data) => {
        setMessages(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-secondary py-20">
      <h1 className="text-base text-tertiary font-zt-formom mr-6 leading-none">Choose Your</h1>
      <h1 className="text-large text-tertiary font-sloop -mt-2 leading-none mb-24">Fortune</h1>
      {messages.length > 0 && <TarotCards messages={messages} />}
    </div>
  );
}

export default TarotPage;
