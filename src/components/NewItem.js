import { useState } from 'react';
import classes from './NewItem.module.css';
import NewItemForm from './NewItemForm';

function NewItem({ addNewTodo }) {
	const [canAdd, setCanAdd] = useState(false);

	const onAddNewTodoItem = (enteredText, adding) => {
		addNewTodo(enteredText);
		setCanAdd(adding);
	};

	return (
		<div className={classes.newItem}>
			{!canAdd ? (
				<button
					className={classes.addTask__btn}
					onClick={() => setCanAdd(true)}
				>
					Add a new task
				</button>
			) : (
				<NewItemForm addNewItem={onAddNewTodoItem} />
			)}
		</div>
	);
}

export default NewItem;
