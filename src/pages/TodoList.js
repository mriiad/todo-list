import { useEffect, useState } from "react";
import NewItem from "../components/NewItem";
import TodoItem from "../components/TodoItem";
function TodoList() {
  const [todoItems, setTodoItems] = useState({});

  useEffect(() => {
    fetchTodoData();
  }, []);

  const fetchTodoData = () => {
    const DATA_URL = "https://cat-todo-list.herokuapp.com/todos";
    fetch(DATA_URL)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setTodoItems(responseData);
        console.log(todoItems);
      });
  };

  return (
    <>
      <NewItem />
      {todoItems.map((todoItem) => (
        <TodoItem description={todoItem?.content} />
      ))}
    </>
  );
}

export default TodoList;
