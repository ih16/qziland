import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { users } from "../mockData";

const Results = () => {
  const { user } = useContext(UserContext);

  const results = localStorage.getItem("results")
    ? JSON.parse(localStorage.getItem("results"))
    : [];

  const renderResults = results.map((result) => {
    if (user) {
      const bgColor = () => {
        if (result.score / result.answers.length < 0.33) return "bg-red-100";
        if (result.score / result.answers.length < 0.8) return "bg-yellow-100";
        return "bg-green-100";
      };
      const userEmail = users.find((user) => user.id == result.userId).email;
      return (
        <div key={result.id} className="w-full md:w-1/3 p-2 text-sm">
          <div className="p-4 shadow-lg rounded-lg">
            <div className="flex flex-wrap justify-between">
              <div className="p-3 text-admin-darker font-semibold">
                {userEmail}
              </div>
              <div className="p-3">
                <span className="font-semibold text-gray-600">Date: </span>
                {result.timestamp}
              </div>
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
                  pathname: `/admin/result/${result.id}`,
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
    <div className="container px-8 pt-8 mx-auto">
      <div className="flex flex-wrap">{renderResults}</div>
    </div>
  );
};

export default Results;
