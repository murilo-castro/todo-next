"use client";

import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

const CreatTask = () => {
  const { saveTodo } = useContext(TodosContext);
  const [input, setInput] = useState("");

  const handleChangueForm = (e) => {
    e.preventDefault();
    console.log(input);
    if (input !== "") {
      saveTodo(input);
    }
    setInput("");
  };

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-between p-4">
      <form onSubmit={handleChangueForm}>
        <input
          className="bg-gray-200"
          type="text"
          name="title"
          id="title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-teste rounded-2xl w-full">Creat Task</button>
      </form>
    </main>
  );
};

export default CreatTask;
