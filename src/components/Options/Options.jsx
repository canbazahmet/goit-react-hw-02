export default function Options({ totalFeedback, updateFeedback, reset }) {
  const showReset = totalFeedback != 0;
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {showReset && <button onClick={reset}>Reset</button>}
    </div>
  );
}
