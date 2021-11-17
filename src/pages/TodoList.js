import { useEffect, useReducer } from "react";
import NewItem from "../components/NewItem";
import { initialList, todoReducer } from "../components/reducer/todo-reducer";
import TodoItem from "../components/TodoItem";
function TodoList() {
  const [todoState, dispatchTodo] = useReducer(todoReducer, initialList);

  const addTodoListItemHandler = () => {
    dispatchTodo({ type: "ADD_ITEM" });
  };

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
        dispatchTodo({ type: "INIT", payload: responseData });
      });
  };

  const addNewTodoItem = (enteredText) => {
    dispatchTodo({ type: "ADD_ITEM", payload: enteredText });
  };

  const deleteTodoItem = (id) => {
    dispatchTodo({ type: "DELETE_ITEM", payload: id });
  };
  return (
    <>
      <NewItem addNewTodo={addNewTodoItem} />
      {todoState.content.map((todoItem) => (
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
