export interface FlashCard {
  readonly question: string;
  readonly answer: string;
}

export interface FlashCardData {
  readonly [key: string]: string;
}

export interface GameState {
  readonly currentIndex: number;
  readonly score: number;
  readonly total: number;
  readonly isFlipped: boolean;
  readonly isRevealed: boolean;
  readonly shuffledCards: readonly FlashCard[];
}
