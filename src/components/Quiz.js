import React, { useState, useEffect, useContext } from "react";
import uuid from "react-uuid";

import Button from "./ui/Button";
import { UserContext } from "./UserContext";

const Quiz = (props) => {
  const questions = localStorage.getItem("questions")
    ? JSON.parse(localStorage.getItem("questions")).filter(
        (question) => !question.isArchived,
      )
    : [];

  const { user } = useContext(UserContext);
  const lastQuestionIndex = questions.length - 1;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex],
  );

  const [userAnswers, setUserAnswers] = useState(
    questions.map((question) => {
      const answer = { id: question.id, response: "" };
      return answer;
    }),
  );

  function next() {
    if (currentQuestionIndex < lastQuestionIndex) {
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else return;
  }

  function previous() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestion(questions[currentQuestionIndex - 1]);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else return;
  }

  function finish() {
    const score = userAnswers.reduce((totalCorrect, userAnswer) => {
      const correctOption = questions.find(
        (question) => question.id == userAnswer.id,
      ).correctOption;
      const isCorrect = correctOption == userAnswer.response ? 1 : 0;
      return totalCorrect + isCorrect;
    }, 0);

    const today = new Date();
    const timestamp =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const result = {
      id: uuid(),
      userId: user.id,
      answers: userAnswers,
      score: score,
      timestamp: timestamp,
    };

    storeResult(result);

    localStorage.removeItem("userAnswers");
    props.history.push("/user");
  }

  function storeResult(result) {
    const previousResults = localStorage.getItem("results")
      ? JSON.parse(localStorage.getItem("results"))
      : [];
    localStorage.setItem(
      "results",
      JSON.stringify([...previousResults, result]),
    );
  }

  function optionSelected(optionId) {
    const userResponse = { id: currentQuestion.id, response: optionId };
    setUserAnswers(
      userAnswers.map((userAnswer) => {
        return userAnswer.id == currentQuestion.id
          ? { ...userResponse }
          : userAnswer;
      }),
    );
  }

  useEffect(() => {
    if (localStorage.getItem("userAnswers")) {
      setUserAnswers(JSON.parse(localStorage.getItem("userAnswers")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }, [userAnswers]);

  const renderOptions = currentQuestion.options.map((option) => {
    const currentQuestionAnswer = userAnswers.find(
      (userAnswer) => userAnswer.id == currentQuestion.id,
    );

    const optionStyle =
      currentQuestionAnswer.response === option.id
        ? "bg-primary max-w-2xl w-full text-lg text-white py-4 px-3 my-6 cursor-pointer border border-gray-100 shadow-none transition-all duration-300 rounded-md"
        : "max-w-2xl w-full text-lg py-4 px-3 my-6 shadow-md cursor-pointer border border-gray-100 hover:shadow-none hover:border-primary rounded hover:text-primary-darker transition-all duration-300";

    return (
      <div
        key={option.id}
        onClick={() => optionSelected(option.id)}
        className={optionStyle}
      >
        {option.value}
      </div>
    );
  });

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="w-full text-xl py-6 font-semibold">
        <span className=" text-gray-500">
          Question {currentQuestionIndex + 1}:
        </span>{" "}
        {currentQuestion.title}
      </div>
      <div className="w-full text-xl py-6">{renderOptions}</div>
      <div className="w-full flex justify-end py-4">
        <span className="mr-2">
          <Button
            style="secondary"
            onClick={() => {
              previous();
            }}
            value="Previous"
          />
        </span>
        {currentQuestionIndex === lastQuestionIndex ? (
          <Button
            onClick={() => {
              finish();
            }}
            value="Finish"
          />
        ) : (
          <Button
            onClick={(e) => {
              next();
            }}
            value="Next"
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
