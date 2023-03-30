import React, { useEffect, useState } from "react";
import { getWithExpiry } from "../../utils";

export const Quiz = () => {
  const [quizzes, setQuiz] = useState([]);
  useEffect(() => {
    let quiz = getWithExpiry("quiz");
    setQuiz(quiz);
    console.log("Quiz", quiz);
  }, []);

  return (
    <div className="flex w-full min-h-[calc(100vh-112px)] h-full bg-red-200 flex-col">
      <label>DUMMY</label>
      {quizzes.map((i, k) => {
        return <div key={"quiz" + k}>{i.question}</div>;
      })}
    </div>
  );
};
