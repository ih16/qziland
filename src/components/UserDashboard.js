import React, { useContext } from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const UserDashboard = () => {
  const { user } = useContext(UserContext);

  const results = localStorage.getItem("results")
    ? JSON.parse(localStorage.getItem("results"))
    : [];

  const renderPreviousResults = results.map((result) => {
    if (user && result.userId == user.id) {
      const bgColor = () => {
        if (result.score / result.answers.length < 0.33) return "bg-red-100";
        if (result.score / result.answers.length < 0.8) return "bg-yellow-100";
        return "bg-green-100";
      };
      return (
        <div key={result.id} className="w-full md:w-1/3 p-2 text-sm">
          <div className="p-4 shadow-lg rounded-lg">
            <div className="p-3">
              <span className="font-semibold text-gray-600">Date: </span>
              {result.timestamp}
            </div>
            <div className="p-3 bg-gray-100 rounded-md border my-2">
              <span className="font-semibold">Questions: </span>
              {result.answers.length}
            </div>

            <div className="p-3 bg-gray-100 rounded-md border my-2">
              <span className="font-semibold">Correct: </span>
              {result.score}
            </div>
            <div className={"p-3 rounded-md border my-2 " + bgColor()}>
              <span className="font-semibold">Accuracy: </span>
              {(result.score / result.answers.length) * 100}%
            </div>
            <div className="mb-2 mt-6 flex justify-end">
              <Link
                to={{
                  pathname: `/user/result/${result.id}`,
                  param: { answers: result.answers },
                }}
              >
                {" "}
                <Button style="secondary" value="View Answers" />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  });
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="border-primary border rounded-lg px-4 py-5 mb-8">
        {localStorage.getItem("userAnswers") ? (
          <div>
            <h2 className="text-2xl"> Your quiz is underway!</h2>
            <p className="text-sm pt-2">Please resume to complete.</p>
            <div
              className="flex mt-2 justify-end
          "
            >
              <Link to="/quiz">
                <Button value="Resume"></Button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl">Take the quiz now!</h2>
            <p className="text-sm pt-2">
              There will be few multiple choice quiestions like who wants to be
              a millioniare or KBC. You have to finish answering them all within
              unlimited amount of time.
            </p>
            <div
              className="flex mt-4 justify-end
          "
            >
              <Link to="/quiz">
                <Button value="Take Quiz"></Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">Previous Quizes</h2>
        <div className="flex flex-wrap">{renderPreviousResults}</div>
      </div>
    </div>
  );
};

export default UserDashboard;
