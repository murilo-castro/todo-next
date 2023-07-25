"use client";

import Link from "next/link";
import TodosList from "./components/TodosList";
import { useContext, useState } from "react";
import TodoListItem from "./components/TodoListItem";
import { TodosContext } from "./contexts/TodosContext";

const Home = () => {
  const { todos } = useContext(TodosContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lista de tarefas</h1>
      <div>
        <ul>
          {teste.map((todo) => {
            const { id, title, done } = todo;
            console.log(`${id} - ${title} - ${done}`);
            // <TodoListItem key={todo.id} todo={todo} />;
            <li key={id}>{title}</li>;
          })}
        </ul>
      </div>
      <Link href="creat-task">
        <button className="bg-teste rounded-md py-5 px-20 w-full">
          Creat Task
        </button>
      </Link>
    </main>
  );
};

export default Home;
