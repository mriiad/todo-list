import { useEffect, useState } from "react";
import NewItem from "../components/NewItem";
import TodoItem from "../components/TodoItem";
import { TODO_DATA } from "../data.js";
function TodoList() {
  const [todoItems, setTodoItems] = useState({});
  useEffect(() => setTodoItems(TODO_DATA));

  /*
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
        console.log(responseData);
        //setTodoItems(responseData.result.XXBTZEUR["a"][0] + " €");
      });
  };*/

  return (
    <>
      <NewItem />
      <TodoItem description={todoItems[0]?.description} />
    </>
  );
}

export default TodoList;
