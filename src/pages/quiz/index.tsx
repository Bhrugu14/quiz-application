import React, { useEffect, useState, Fragment } from "react";
import { getWithExpiry } from "../../utils";
import { QuizCard } from "./quizCard";

export const Quiz = () => {
  const [quizzes, setQuiz] = useState([]);
  const [extra, setExtra] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (index, answer) => {
    quizzes[index].selectedAnswer = answer;
    setQuiz(quizzes);
    setExtra(extra + 1);
  };
  const onNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const preventRefresh = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("YOO");
    return;
  };

  useEffect(() => {
    window.addEventListener("beforeunload", preventRefresh);

    return () => {
      window.removeEventListener("beforeunload", preventRefresh);
    };
  }, []);

  useEffect(() => {
    let quiz = getWithExpiry("quiz");
    setQuiz(quiz);
    console.log("Quiz", quiz);
  }, []);

  // min-h-[calc(100vh-112px)]

  return (
    <div className="flex w-full h-[calc(100vh-112px)] overflow-hidden bg-primaryBg flex-col items-center justify-center">
      {quizzes.length > 0 &&
        quizzes.map((i, k) => (
          <QuizCard
            key={"options" + i.question}
            i={i}
            k={k}
            currentQuestionIndex={currentQuestionIndex}
            handleAnswer={(answer) => handleAnswer(k, answer)}
            onNext={onNext}
          />
        ))}
    </div>
  );
};
