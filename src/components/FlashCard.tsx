import type { FlashCard as FlashCardType } from "../types";
import "./FlashCard.css";

interface FlashCardProps {
  readonly card: FlashCardType;
  readonly isFlipped: boolean;
  readonly onFlip: () => void;
}

export function FlashCard({
  card,
  isFlipped,
  onFlip,
}: FlashCardProps): JSX.Element {
  return (
    <div
      className={`flash-card ${isFlipped ? "flipped" : ""}`}
      onClick={onFlip}
      onKeyDown={(e): void => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onFlip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={
        isFlipped
          ? "Answer side of card"
          : "Question side of card. Click to reveal answer."
      }
    >
      <div className="card-inner">
        <div className="card-front">
          <span className="card-label">Question</span>
          <p className="card-content">{card.question}</p>
          <span className="card-hint">Click to reveal answer</span>
        </div>
        <div className="card-back">
          <span className="card-label">Answer</span>
          <p className="card-content">{card.answer}</p>
        </div>
      </div>
    </div>
  );
}
