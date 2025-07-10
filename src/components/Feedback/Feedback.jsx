export default function Feedback({ good, neutral, bad, total }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {Math.round((good * 100) / total)}%</p>
    </div>
  );
}
