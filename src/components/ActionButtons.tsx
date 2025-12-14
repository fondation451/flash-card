import "./ActionButtons.css";

interface ActionButtonsProps {
  readonly isRevealed: boolean;
  readonly onCorrect: () => void;
  readonly onIncorrect: () => void;
}

export function ActionButtons({
  isRevealed,
  onCorrect,
  onIncorrect,
}: ActionButtonsProps): JSX.Element {
  return (
    <div className={`action-buttons ${isRevealed ? "visible" : ""}`}>
      <button
        type="button"
        className="action-btn incorrect"
        onClick={onIncorrect}
        disabled={!isRevealed}
        aria-label="Mark as incorrect"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
        <span>Incorrect</span>
      </button>
      <button
        type="button"
        className="action-btn correct"
        onClick={onCorrect}
        disabled={!isRevealed}
        aria-label="Mark as correct"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <span>Correct</span>
      </button>
    </div>
  );
}
