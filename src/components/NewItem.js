import { useState } from "react";
import NewItemForm from "./NewItemForm";
function NewItem() {
  const [add, setAdd] = useState(false);

  const onAddNewTodoItem = (enteredText, adding) => {
    setAdd(adding);
    console.log(enteredText);
  };
  return (
    <div>
      <button onClick={() => setAdd(true)}>Ajouter une nouvelle tache</button>
      {add ? <NewItemForm addNewItem={onAddNewTodoItem} /> : null}
    </div>
  );
}

export default NewItem;
