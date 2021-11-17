import { useState } from "react";

function NewItemForm({ addNewItem }) {
  const [enteredText, setEnteredText] = useState("");
  const [adding, isAdding] = useState(false);

  const onInputChangeHandler = (e) => {
    setEnteredText(e.target.value);
    isAdding(true);
  };

  const onAjouterClickHandler = () => {
    addNewItem(enteredText, adding);
    setEnteredText("");
    isAdding(false);
  };
  return (
    <div>
      <input type="text" value={enteredText} onChange={onInputChangeHandler} />
      <button onClick={onAjouterClickHandler}>+</button>
    </div>
  );
}

export default NewItemForm;
