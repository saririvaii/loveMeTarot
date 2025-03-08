import { useState } from 'react';
import TarotPage from './pages/TarotPage';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {currentView === 'landing' ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary py-6">
          <h1 className="text-base text-tertiary font-zt-formom mr-4 leading-none">Excited for your</h1>
          <h1 className="text-large text-tertiary font-sloop -mt-2 leading-none mb-8 text-center">Concealer?</h1>
          <button 
            onClick={() => setCurrentView('tarot')}
            className="px-8 py-3 bg-primary text-white rounded-lg font-zt-formom hover:opacity-90 transition-opacity"
          >
            Begin Your Reading
          </button>
        </div>
      ) : (
        <TarotPage />
      )}
    </div>
  );
}

export default App;
