import { useEffect, useState } from "react";
import NewItem from "../components/NewItem";
import TodoItem from "../components/TodoItem";
function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

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
      });
  };

  const addNewTodoItem = (enteredText) => {
    setTodoItems((prevState) => {
      return [...prevState, { id: Math.random(), content: enteredText }];
    });
  };

  const deleteTodoItem = (id) => {
    setTodoItems((prevState) => {
      return [...prevState.filter((todo) => todo.id !== id)];
    });
  };
  return (
    <>
      <NewItem addNewTodo={addNewTodoItem} />
      {todoItems?.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          content={todoItem.content}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </>
  );
}

export default TodoList;
