import { useState, useEffect, useCallback } from "react";
import type { FlashCard, FlashCardData, GameState } from "../types";

function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    const swapItem = shuffled[j];
    if (temp !== undefined && swapItem !== undefined) {
      shuffled[i] = swapItem;
      shuffled[j] = temp;
    }
  }
  return shuffled;
}

function parseFlashCards(data: FlashCardData): FlashCard[] {
  return Object.entries(data).map(([question, answer]) => ({
    question,
    answer,
  }));
}

export function useFlashCards(): {
  readonly gameState: GameState;
  readonly currentCard: FlashCard | null;
  readonly isLoading: boolean;
  readonly error: string | null;
  readonly flipCard: () => void;
  readonly markCorrect: () => void;
  readonly markIncorrect: () => void;
  readonly resetGame: () => void;
  readonly isGameComplete: boolean;
} {
  const [cards, setCards] = useState<readonly FlashCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    currentIndex: 0,
    score: 0,
    total: 0,
    isFlipped: false,
    isRevealed: false,
    shuffledCards: [],
  });

  useEffect(() => {
    const loadCards = async (): Promise<void> => {
      try {
        const basePath = import.meta.env.BASE_URL;
        const response = await fetch(`${basePath}flashcards.json`);
        if (!response.ok) {
          throw new Error("Failed to load flash cards");
        }
        const data: FlashCardData = (await response.json()) as FlashCardData;
        const parsedCards = parseFlashCards(data);
        setCards(parsedCards);
        const shuffled = shuffleArray(parsedCards);
        setGameState((prev) => ({
          ...prev,
          shuffledCards: shuffled,
          total: shuffled.length,
        }));
        setIsLoading(false);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        setIsLoading(false);
      }
    };

    void loadCards();
  }, []);

  const currentCard: FlashCard | null =
    gameState.shuffledCards[gameState.currentIndex] ?? null;

  const isGameComplete = gameState.currentIndex >= gameState.total;

  const flipCard = useCallback((): void => {
    setGameState((prev) => ({
      ...prev,
      isFlipped: !prev.isFlipped,
      isRevealed: true,
    }));
  }, []);

  const nextCard = useCallback((): void => {
    setGameState((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex + 1,
      isFlipped: false,
      isRevealed: false,
    }));
  }, []);

  const markCorrect = useCallback((): void => {
    setGameState((prev) => ({
      ...prev,
      score: prev.score + 1,
    }));
    nextCard();
  }, [nextCard]);

  const markIncorrect = useCallback((): void => {
    nextCard();
  }, [nextCard]);

  const resetGame = useCallback((): void => {
    const shuffled = shuffleArray(cards);
    setGameState({
      currentIndex: 0,
      score: 0,
      total: shuffled.length,
      isFlipped: false,
      isRevealed: false,
      shuffledCards: shuffled,
    });
  }, [cards]);

  return {
    gameState,
    currentCard,
    isLoading,
    error,
    flipCard,
    markCorrect,
    markIncorrect,
    resetGame,
    isGameComplete,
  };
}
