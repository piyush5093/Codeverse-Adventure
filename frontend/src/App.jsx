import React from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { GameContainer } from './components/GameContainer';
import { useGameStore } from './hooks/useGameStore';

function App() {
  const { selectedLanguage, setLanguage } = useGameStore();

  if (!selectedLanguage) {
    return <LanguageSelector onSelect={setLanguage} />;
  }

  return <GameContainer language={selectedLanguage} />;
}

export default App;
