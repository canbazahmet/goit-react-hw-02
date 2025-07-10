import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notifications from "../Notifications/Notifications";
import { useEffect, useState } from "react";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("savedFeedbacks");
    return savedFeedbacks !== null
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const clearFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  let totalFeedback = values.good + values.neutral + values.bad;

  useEffect(() => {
    window.localStorage.setItem("savedFeedbacks", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={clearFeedback}
      />
      {totalFeedback === 0 ? (
        <Notifications />
      ) : (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
        />
      )}
    </>
  );
}
