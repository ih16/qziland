import React, { useState } from "react";
import InputText from "./ui/InputText";
import Button from "./ui/Button";
import { useParams } from "react-router-dom";

const EditQuestion = (props) => {
  const { id } = useParams();
  const questions = localStorage.getItem("questions")
    ? JSON.parse(localStorage.getItem("questions"))
    : [];

  let question = props.location.param
    ? props.location.param.question
    : JSON.parse(localStorage.getItem("questions")).find(
        (question) => question.id == id,
      ); //Collect values from local storage if props are not found

  const [title, setTitle] = useState(question.title);
  const [correctOption, setCorrectOption] = useState(question.correctOption);

  const [options, setOptions] = useState(question.options);

  function handleChangeOptions(e) {
    const newOption = { id: parseInt(e.target.name), value: e.target.value };
    const newOptions = options.map((option) =>
      option.id == e.target.name ? newOption : option,
    );
    setOptions(newOptions);
  }

  function updateQuestions(e, question) {
    e.preventDefault();

    question.title = title;
    question.options = options;
    question.correctOption = correctOption;
    question.isModified = true;

    const updatedQuestions = questions.map((ques) =>
      ques.id === question.id ? question : ques,
    );

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));

    props.history.push("/admin/dashboard");
  }

  return (
    <div className="container mx-auto px-8">
      <h2 className="my-8 text-xl font-medium">Add New Question:</h2>
      <form
        className="w-full max-w-5xl"
        onSubmit={(e) => updateQuestions(e, question)}
      >
        <InputText
          label="Question Title:"
          placeholder="What is an infinity loop?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <div>
          <div className="flex flex-wrap">
            <div className="w-1/2 p-2">
              <InputText
                label="Option 1"
                placeholder="Whatever is in option 3"
                value={options[0].value}
                onChange={handleChangeOptions}
                name="1"
              />
            </div>
            <div className="w-1/2 p-2">
              <InputText
                label="Option 2"
                placeholder="Whatever is in option 4"
                value={options[1].value}
                onChange={handleChangeOptions}
                name="2"
              />
            </div>
            <div className="w-1/2 p-2">
              <InputText
                label="Option 3"
                placeholder="Whatever is in option 2"
                value={options[2].value}
                onChange={handleChangeOptions}
                name="3"
              />
            </div>
            <div className="w-1/2 p-2">
              <InputText
                label="Option 4"
                placeholder="Whatever is in option 1"
                value={options[3].value}
                onChange={handleChangeOptions}
                name="4"
              />
            </div>

            <label
              htmlFor="correctOption"
              className="flex flex-col w-full p-2 font-semibold text-gray-600"
            >
              Correct Option
              <select
                id="correctOption"
                name="correctOption"
                className="shadow rounded border-0 mt-1 p-3 w-1/2"
                onChange={(e) => setCorrectOption(e.target.value)}
                value={correctOption}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mt-4 px-2">
          <Button value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default EditQuestion;
