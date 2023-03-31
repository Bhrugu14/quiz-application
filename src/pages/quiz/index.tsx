import React, { useEffect, useState, Fragment } from "react";
import { getWithExpiry } from "../../utils";
import { QuizCard } from "./quizCard";
import lottie from "lottie-web";
import { Transition } from "@headlessui/react";
import { Button } from "../../component";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const navigate = useNavigate();
  const [quizzes, setQuiz] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [extra, setExtra] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (index, answer) => {
    quizzes[index].selectedAnswer = answer;
    if (answer === quizzes[index].correct_answer) {
      quizzes[index].correct = true;
    }
    setQuiz(quizzes);
    setExtra(extra + 1);
  };
  const onNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex + 1 === quizzes.length) {
      setIsCompleted(true);
    }
  };

  const preventRefresh = (e) => {
    console.log("here");

    window.location.pathname = "/";
    e.stopPropagation();
    e.preventDefault();
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
  }, []);

  // min-h-[calc(100vh-112px)]

  return (
    <div className=" relative flex w-full h-[calc(100vh-112px)] overflow-hidden bg-primaryBg flex-col items-center justify-center">
      {quizzes.length > 0 && !isCompleted && (
        <div className="fixed top-16 grid grid-cols-1 sm:grid-cols-2 w-full bg-primary rounded-b-xl text-md shadow-xl">
          <label className="flex items-center justify-center text-center py-1 text-white">
            {"Current Score:"}
            <span className="font-bold pl-1">{`${
              quizzes.filter((i) => i.correct).length
            }/${quizzes.filter((i) => i.selectedAnswer).length}`}</span>
            <span className="text-xs ml-1">
              {"(correct answer/attended questions)"}
            </span>
          </label>

          <label className="flex items-center justify-center text-center py-1 text-white">
            Overall Score:
            <span className="font-bold pl-1">{`${
              quizzes.filter((i) => i.correct).length
            }/${quizzes.length}`}</span>
            <span className="text-xs ml-1">
              {"(correct answer/total questions)"}
            </span>
          </label>
        </div>
      )}
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
      <Transition
        as={Fragment}
        show={isCompleted}
        enter="transform ease-in-out duration-500 delay-500 sm:duration-700 sm:delay-700"
        enterFrom="scale-0"
        enterTo="scale-1"
        leave="transform ease-in-out duration-500 sm:duration-700"
        leaveFrom="scale-1"
        leaveTo="scale-1"
      >
        <div className="w-80 max-w-xl bg-primaryCard shadow-2xl shadow-primary rounded-xl p-2 flex flex-col">
          <label className="text-center font-bold drop-shadow-xl shadow-green-800 bg-cyan-500 rounded-md py-1 text-white">
            Result
          </label>
          <label className="text-md text-black pt-2 text-center">
            Category:
            <span className="ml-1 font-bold">{quizzes[0]?.category}</span>
          </label>
          <label className="text-md text-black py-1 text-center">
            Difficulty:
            <span className="ml-1 font-bold">{quizzes[0]?.difficulty}</span>
          </label>
          <label className="text-md text-black pt-1 text-center">
            Correct Answer:
            <span className="mx-1 font-bold">
              {quizzes.filter((i) => i.correct).length}
            </span>
            from
            <span className="mx-1 font-bold">{quizzes.length}</span>questions
          </label>
          <label className="text-md text-black text-center">
            you scored
            <span className="mx-1 font-bold text-primary">
              {Math.round(
                (quizzes.filter((i) => i.correct).length / quizzes.length) * 100
              ) + "%"}
            </span>
            in your quiz
          </label>
          <Button
            title={"Select Again"}
            onClick={() => navigate("/")}
            extraClass={"mt-5 max-w-2xl"}
          />
        </div>
      </Transition>
    </div>
  );
};
