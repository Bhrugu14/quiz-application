import React, { Fragment, useMemo, useState } from "react";
import { Transition } from "@headlessui/react";
import { Button } from "../../component";
import { ShuffleArray } from "../../utils";

export const QuizCard = ({
  i,
  currentQuestionIndex,
  k,
  handleAnswer,
  onNext,
}) => {
  const optionArray = useMemo(
    () => ShuffleArray([...i.incorrect_answers, i.correct_answer]),
    [i]
  );
  return (
    <Transition
      as={Fragment}
      show={currentQuestionIndex == k}
      enter="transform ease-in-out duration-500 delay-500 sm:duration-700 sm:delay-700"
      enterFrom="translate-y-[100vh]"
      enterTo="translate-y-0"
      leave="transform ease-in-out duration-500 sm:duration-700"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-[100vw]"
    >
      <div className="bg-primaryCard drop-shadow-xl rounded-lg p-6 mx-4 sm:mx-auto min-w-2xl shadow-primary transition-all">
        <h1 className="text-lg font-bold mb-4 drop-shadow-xl shadow-primary">
          {i.question}
        </h1>
        <div className="grid grid-cols-2 gap-2">
          {optionArray.map((o, l) => (
            <Button
              secondary
              title={o}
              key={o + l}
              onClick={() => {
                handleAnswer(o);
              }}
              titleClassName={
                i.selectedAnswer
                  ? i.correct_answer === o
                    ? "text-white"
                    : i.selectedAnswer === o
                    ? "text-white"
                    : ""
                  : ""
              }
              extraClass={
                i.selectedAnswer
                  ? i.correct_answer === o
                    ? "border-2 border-green-700 bg-green-700 pointer-events-none"
                    : i.selectedAnswer === o
                    ? "border-2 border-red-700 bg-red-700 pointer-events-none"
                    : "pointer-events-none"
                  : ""
              }
            />
          ))}
        </div>
        <Button
          title="Next"
          onClick={onNext}
          extraClass={`mt-5 ${!i.selectedAnswer && "hidden transition-all"}`}
        />
      </div>
    </Transition>
  );
};
