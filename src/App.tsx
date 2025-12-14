import { useFlashCards } from "./hooks/useFlashCards";
import { FlashCard } from "./components/FlashCard";
import { ScoreBoard } from "./components/ScoreBoard";
import { ActionButtons } from "./components/ActionButtons";
import { GameComplete } from "./components/GameComplete";
import "./App.css";

function App(): JSX.Element {
  const {
    gameState,
    currentCard,
    isLoading,
    error,
    flipCard,
    markCorrect,
    markIncorrect,
    resetGame,
    isGameComplete,
  } = useFlashCards();

  if (isLoading) {
    return (
      <div className="app">
        <div className="loading">
          <div className="loading-spinner" />
          <p>Loading flash cards...</p>
        </div>
      </div>
    );
  }

  if (error !== null) {
    return (
      <div className="app">
        <div className="error">
          <h2>Oops!</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Flash Cards</h1>
        <p className="subtitle">Test your knowledge</p>
      </header>

      <main className="main">
        {isGameComplete ? (
          <GameComplete
            score={gameState.score}
            total={gameState.total}
            onRestart={resetGame}
          />
        ) : (
          <>
            <ScoreBoard
              score={gameState.score}
              current={gameState.currentIndex + 1}
              total={gameState.total}
            />
            {currentCard !== null && (
              <>
                <FlashCard
                  card={currentCard}
                  isFlipped={gameState.isFlipped}
                  onFlip={flipCard}
                />
                <ActionButtons
                  isRevealed={gameState.isRevealed}
                  onCorrect={markCorrect}
                  onIncorrect={markIncorrect}
                />
              </>
            )}
          </>
        )}
      </main>

      <footer className="footer">
        <p>Click the card to reveal the answer</p>
      </footer>
    </div>
  );
}

export default App;
