import "./ScoreBoard.css";

interface ScoreBoardProps {
  readonly score: number;
  readonly current: number;
  readonly total: number;
}

export function ScoreBoard({
  score,
  current,
  total,
}: ScoreBoardProps): JSX.Element {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="score-board">
      <div className="score-stats">
        <div className="stat">
          <span className="stat-value correct">{score}</span>
          <span className="stat-label">Correct</span>
        </div>
        <div className="stat">
          <span className="stat-value">{current}</span>
          <span className="stat-label">/ {total}</span>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}
