const TodoListItem = ({ todo }) => {
  console.log(todo);
  return (
    <div>
      {todo.id} - {todo.title} - {todo.done ? "true" : "false"}
    </div>
  );
};

export default TodoListItem;
