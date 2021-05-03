import React from "react";

const QuestionsNotFound = () => {
  return (
    <div className="px-8 container mx-auto pt-32 text-center">
      <h2 className="text-4xl text-gray mb-5">The questionnaire is empty!</h2>
      <div className="text-gray-600">
        Please add questions from admin or seed pre-configured question to local
        storage
      </div>
    </div>
  );
};

export default QuestionsNotFound;
