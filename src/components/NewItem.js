import { useState } from "react";
import NewItemForm from "./NewItemForm";
function NewItem({ addNewTodo }) {
  const [canAdd, setCanAdd] = useState(false);

  const onAddNewTodoItem = (enteredText) => {
    addNewTodo(enteredText);
  };

  const onCancelAdding = (adding) => {
    setCanAdd(adding);
  };

  return (
    <div>
      {!canAdd ? (
        <button onClick={() => setCanAdd(true)}>
          Ajouter une nouvelle tache
        </button>
      ) : (
        <NewItemForm
          addNewItem={onAddNewTodoItem}
          cancelAdding={onCancelAdding}
        />
      )}
    </div>
  );
}

export default NewItem;
