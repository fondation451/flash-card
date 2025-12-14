import "./GameComplete.css";

interface GameCompleteProps {
  readonly score: number;
  readonly total: number;
  readonly onRestart: () => void;
}

export function GameComplete({
  score,
  total,
  onRestart,
}: GameCompleteProps): JSX.Element {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const getMessage = (): string => {
    if (percentage === 100) return "Perfect Score! 🎉";
    if (percentage >= 80) return "Excellent Work! 🌟";
    if (percentage >= 60) return "Good Job! 👍";
    if (percentage >= 40) return "Keep Practicing! 💪";
    return "Try Again! 📚";
  };

  return (
    <div className="game-complete">
      <div className="completion-card">
        <h2 className="completion-title">{getMessage()}</h2>
        <div className="final-score">
          <span className="score-number">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{total}</span>
        </div>
        <div className="percentage">{percentage}%</div>
        <button type="button" className="restart-btn" onClick={onRestart}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 4v6h6M23 20v-6h-6" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
          </svg>
          Play Again
        </button>
      </div>
    </div>
  );
}
