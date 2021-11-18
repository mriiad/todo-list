import { useEffect, useReducer } from "react";
import NewItem from "../components/NewItem";
import { initialList, todoReducer } from "../components/reducer/todo-reducer";
import TodoItem from "../components/TodoItem";
import { TODO_DATA } from "../data.js";
import classes from "./TodoList.module.css";

function TodoList() {
  const [todoState, dispatchTodo] = useReducer(todoReducer, initialList);

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
      })
      .catch(() => {
        dispatchTodo({ type: "INIT", payload: TODO_DATA });
      });
  };

  const addNewTodoItem = (enteredText) => {
    dispatchTodo({ type: "ADD_ITEM", payload: enteredText });
  };

  const deleteTodoItem = (id) => {
    dispatchTodo({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div className={classes.todoList}>
      <NewItem addNewTodo={addNewTodoItem} />
      {todoState.content.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          content={todoItem.content}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </div>
  );
}

export default TodoList;
