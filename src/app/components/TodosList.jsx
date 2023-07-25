import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import TodoListItem from "./TodoListItem";

const TodosList = () => {
  const { todos } = useContext(TodosContext);
  console.log(todos);
  const data = todos.map((todo) => {
    <TodoListItem key={todo.id} todo={todo}></TodoListItem>;
  });

  console.log(data);

  return <div>{data}</div>;
};

export default TodosList;
