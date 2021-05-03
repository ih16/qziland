import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { questionBank } from "../mockData.js";

const AdminDashboard = (props) => {
  const { user } = useContext(UserContext);
  const [update, setUpdate] = useState(0);

  function seedQuestions() {
    localStorage.setItem("questions", JSON.stringify(questionBank));
    setUpdate((update) => update + 1);
  }

  const questions = localStorage.getItem("questions")
    ? JSON.parse(localStorage.getItem("questions"))
    : [];

  const renderQuestions = questions.map((question) => {
    const renderOptions = question.options.map((option) => {
      return (
        <div
          key={option.id}
          className={
            question.correctOption == option.id
              ? "px-4 py-3 border-b bg-green-50"
              : "px-4 py-3 border-b"
          }
        >
          {option.value}
        </div>
      );
    });

    function toggleArchive(id, toggleState) {
      if (toggleState)
        toast("Question has been archived", {
          icon: "📚",
        });
      else
        toast("Question restored", {
          icon: "♻",
        });
      let questions = JSON.parse(localStorage.getItem("questions"));
      let question = questions.find((question) => question.id == id);
      question.isArchived = toggleState;
      localStorage.setItem("questions", JSON.stringify(questions));
    }

    const questionCardStyle = question.isArchived
      ? "shadow-md rounded my-6 w-full text-gray-400 italic"
      : "shadow-md rounded my-6 w-full";
    return (
      <div key={question.id} className={questionCardStyle}>
        <div className="bg-gray-100  rounded-t px-2 py-4 font-medium justify-between flex border-b-2 border-gray-200">
          <div className="flex justify-center items-center">
            {question.isArchived && (
              <span className="text-white bg-purple-400 rounded p-1 mr-2 font-medium not-italic">
                Archived
              </span>
            )}
            {question.isModified && (
              <span className="text-white bg-yellow-400 rounded p-1 mr-2 font-medium not-italic">
                Modified
              </span>
            )}
            {question.title}
          </div>
          {!question.isArchived ? (
            <div className="flex justify-center items-start">
              <Link
                to={{
                  pathname: `/admin/edit/${question.id}`,
                  param: { question: question },
                }}
                className="p-1 mr-1 rounded bg-white hover:shadow-lg border transition-shadow duration-300"
              >
                📝
              </Link>
              <Link
                to="#"
                onClick={() => toggleArchive(question.id, true)}
                className="p-1 rounded bg-white hover:shadow-lg border transition-shadow duration-300"
              >
                ❌
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-start">
              <Link
                to="#"
                onClick={() => toggleArchive(question.id, false)}
                className="p-1 rounded bg-white hover:shadow-lg border transition-shadow duration-300 not-italic"
              >
                ♻
              </Link>
            </div>
          )}
        </div>
        <div>{renderOptions}</div>
      </div>
    );
  });

  return (
    <div className="container px-8 py-8 mx-auto">
      <Toaster />
      <div className="border-admin-darker border rounded-lg px-4 py-5 mb-8">
        <div>
          <h2 className="text-2xl"> Add New Qustion</h2>
          <p className="text-sm pt-2">
            Click to add new questions to the questioniare
          </p>
          <div
            className="flex mt-2 justify-end
          "
          >
            <Link to="/admin/add">
              <Button value="Add New"></Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">{renderQuestions}</div>
      {!localStorage.getItem("questions") && (
        <div>
          <div></div>

          <Button
            onClick={(e) => seedQuestions()}
            value="Seed"
            style="secondary"
          ></Button>

          <span className="ml-2">10 questions from mock data</span>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
