import { useEffect, useState } from "react";
import classes from "./TodoItem.module.css";

function TodoItem({ id, content, deleteTodoItem }) {
  const [itemContent, setItemContent] = useState("");
  const [itemId, setItemId] = useState("");

  useEffect(() => {
    setItemContent(content);
    setItemId(id);
  });
  const onDeleteClickHandler = () => {
    deleteTodoItem(itemId);
  };
  return (
    <div className={classes.todoItem}>
      <span cla>{itemContent}</span>
      <button onClick={onDeleteClickHandler}>-</button>
    </div>
  );
}

export default TodoItem;
