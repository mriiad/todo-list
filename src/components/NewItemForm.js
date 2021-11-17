import { useState } from "react";

function NewItemForm({ addNewItem, cancelAdding }) {
  const [enteredText, setEnteredText] = useState("");
  const [adding, isAdding] = useState(false);

  const onInputChangeHandler = (e) => {
    setEnteredText(e.target.value);
    isAdding(true);
  };

  const onAjouterClickHandler = () => {
    setEnteredText("");
    addNewItem(enteredText);
  };

  const onCancelClickHandler = () => {
    isAdding(false);
    cancelAdding(adding);
  };

  return (
    <div>
      <input type="text" value={enteredText} onChange={onInputChangeHandler} />
      <button onClick={onAjouterClickHandler}>+</button>
      <button onClick={onCancelClickHandler}>Cancel</button>
    </div>
  );
}

export default NewItemForm;
