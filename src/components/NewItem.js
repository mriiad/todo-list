import { useContext } from 'react';
import classes from './NewItem.module.css';
import NewItemForm from './NewItemForm';
import TodoContext from '../store/todo-context';

function NewItem() {
	const [state, dispatch] = useContext(TodoContext);

	const onAddNewTaskClickHander = () => {
		dispatch({
			type: 'IS_ADDING',
			payload: { isAdding: true },
		});
	};

	return (
		<div className={classes.newItem}>
			{!state.isAdding ? (
				<button
					className={classes.addTask__btn}
					onClick={onAddNewTaskClickHander}
				>
					Add a new task
				</button>
			) : (
				<NewItemForm />
			)}
		</div>
	);
}

export default NewItem;
