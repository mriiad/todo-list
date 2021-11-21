import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import classes from "./NewItemForm.module.css";

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

  const pointerStyle = { cursor: "pointer" };

  return (
    <div>
      <button onClick={onCancelClickHandler}>Cancel</button>
      <input
        className={classes.newItem__control}
        type="text"
        value={enteredText}
        onChange={onInputChangeHandler}
      />
      <AddCircleIcon onClick={onAjouterClickHandler} style={pointerStyle} />
    </div>
  );
}

export default NewItemForm;
