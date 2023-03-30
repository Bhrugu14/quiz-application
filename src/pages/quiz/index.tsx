import { Transition } from "@headlessui/react";
import React, { useEffect, useState, Fragment } from "react";
import { Button } from "../../component";
import { getWithExpiry, ShuffleArray } from "../../utils";

// card
function QuestionsCard({ questions, currentQuestionIndex, handleAnswer }) {
  return questions.map((option, k) => (
    <Transition
      key={"options" + option.question}
      as={Fragment}
      show={currentQuestionIndex == k}
      enter="transform ease-in-out duration-500 delay-500 sm:duration-700 sm:delay-700"
      enterFrom="translate-y-[100vh]"
      enterTo="translate-y-0"
      leave="transform ease-in-out duration-500 sm:duration-700"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-[100vw]"
    >
      <div className="bg-white shadow-lg rounded-lg p-6 mx-4 sm:mx-auto sm:w-2xl">
        <h1 className="text-lg font-bold mb-4">{option.question}</h1>
        <div className="grid grid-cols-2 gap-2">
          {ShuffleArray([
            ...questions[currentQuestionIndex].incorrect_answers,
            option.correct_answer,
          ]).map((o, l) => (
            <Button title={o} key={o + l} onClick={handleAnswer} />
          ))}
        </div>
      </div>
    </Transition>
  ));
}
// card

export const Quiz = () => {
  const [quizzes, setQuiz] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = () => {
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
      {quizzes.length > 0 && (
        <QuestionsCard
          questions={quizzes}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};
