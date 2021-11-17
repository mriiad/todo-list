import { useEffect, useState } from "react";
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
    <div>
      <span>{itemContent}</span>
      <button onClick={onDeleteClickHandler}>-</button>
    </div>
  );
}

export default TodoItem;
