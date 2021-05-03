import React, { useState } from "react";
import InputText from "./ui/InputText";
import Button from "./ui/Button";
import uuid from "react-uuid";

const AddNewQuestion = (props) => {
  const [title, setTitle] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const intialOptions = [
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "",
    },
    {
      id: 3,
      value: "",
    },
    {
      id: 4,
      value: "",
    },
  ];

  const [options, setOptions] = useState(intialOptions);

  function handleChangeOptions(e) {
    const newOption = { id: parseInt(e.target.name), value: e.target.value };
    const newOptions = options.map((option) =>
      option.id == e.target.name ? newOption : option,
    );
    setOptions(newOptions);
  }

  function storeQuestions(question) {
    const previousQuestions = localStorage.getItem("questions")
      ? JSON.parse(localStorage.getItem("questions"))
      : [];
    localStorage.setItem(
      "questions",
      JSON.stringify([...previousQuestions, question]),
    );
  }

  function submit(e) {
    e.preventDefault();
    const newQuestion = {
      id: uuid(),
      title: title,
      options: options,
      correctOption: correctOption,
      isArchived: false,
      isModified: false,
    };
    storeQuestions(newQuestion);
    setTitle("");
    setCorrectOption("");
    setOptions(intialOptions);
    props.history.push("/admin/dashboard");
  }

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="mb-8 text-xl font-medium">Add New Question:</h2>
      <form className="w-full max-w-5xl" onSubmit={(e) => submit(e)}>
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
                <option value="" defaultValue>
                  Select
                </option>
                <option value="1">1</option>
                <option value="2" defaultValue>
                  2
                </option>
                <option value="3" defaultValue>
                  3
                </option>
                <option value="4" defaultValue>
                  4
                </option>
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

export default AddNewQuestion;
