import { useState, useEffect } from "react";

function TarotCards({ messages }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen -ml-32 flex justify-center p-8">
      <div className="flex">
        {messages.map((message, index) => {
          const isHoveredOrNeighbor =
            hoveredIndex === index ||
            hoveredIndex === index - 1 ||
            hoveredIndex === index + 1;

          return (
            <div
              key={index}
              onClick={() => setSelectedCard(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: `translateX(${isVisible ? '0' : '100vw'}) 
                          translateY(${index * 20 - (isHoveredOrNeighbor ? 10 : 0)}px) 
                          skewY(-10deg)`,
                zIndex: 100 + index,
                transition: `transform 0.6s ease-out ${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
              }}
              className={`w-48 h-72 rounded-lg bg-primary shadow-xl cursor-pointer ${
                index !== 0 ? "-ml-[200px]" : ""
              }`}
            >
              {selectedCard === index ? (
                <div
                  className="w-full h-full bg-white p-6 rounded-lg flex flex-col justify-center"
                  style={{
                    transform: "skewY(10deg)",
                  }}
                >
                  <h2 className="text-lg font-semibold text-primary">
                    {message.title}
                  </h2>
                  <p className="mt-2 text-gray-700">{message.message}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TarotCards;
