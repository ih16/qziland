import React from "react";
import { useParams } from "react-router-dom";

const Answer = (props) => {
  const questions = localStorage.getItem("questions")
    ? JSON.parse(localStorage.getItem("questions"))
    : [];

  const { id } = useParams();

  const answers = props.location.param
    ? props.location.param.answers
    : JSON.parse(localStorage.getItem("results")).find(
        (result) => result.id == id,
      ).answers; //Collect values from local storage if props missing

  const renderAnswers = answers.map((answer) => {
    const question = questions.find((question) => question.id == answer.id);

    const userAnswer = question.options.find(
      (option) => option.id == answer.response,
    ).value;

    const correctAnswer = question.options.find(
      (option) => option.id == question.correctOption,
    ).value;

    return (
      <div key={answer.id} className="mb-8 shadow-md rounded-md">
        <h2 className="font-medium p-4 bg-gray-50 border-b rounded-t-md">
          {question.isModified && (
            <span className="text-white bg-yellow-400 rounded p-1 mr-2 font-bold">
              Modified
            </span>
          )}
          <span className="text-gray-600 font-bold">Question:</span>{" "}
          {question.title}
        </h2>
        <div className="py-3 px-1">
          <div className="py-1 px-3">
            <span className="text-gray-600 font-medium">Your Answer: </span>{" "}
            {userAnswer}
          </div>
          <div className="py-1 px-3">
            <span className="text-primary font-medium">Correct: </span>{" "}
            {correctAnswer}
          </div>
        </div>
      </div>
    );
  });

  return <div className="container mx-auto px-8 mt-8">{renderAnswers}</div>;
};

export default Answer;
