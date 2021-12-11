import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext, useState } from 'react';
import TodoContext from '../store/todo-context';
import classes from './NewItemForm.module.css';

function NewItemForm({ addNewItem, cancelAdding }) {
	const todoCtx = useContext(TodoContext);

	const [enteredText, setEnteredText] = useState('');
	const [adding, isAdding] = useState(false);

	const onInputChangeHandler = (e) => {
		setEnteredText(e.target.value);
		isAdding(true);
	};

	const onAjouterClickHandler = () => {
		setEnteredText('');
		if (enteredText === '') {
			todoCtx.onAdd();
		} else {
			addNewItem(enteredText);
		}
	};

	const onCancelClickHandler = () => {
		isAdding(false);
		cancelAdding(adding);
	};

	const pointerStyle = { cursor: 'pointer' };

	return (
		<div className={classes.newItem__control__container}>
			<CancelIcon onClick={onCancelClickHandler} style={pointerStyle} />
			<input
				className={classes.newItem__control}
				type='text'
				value={enteredText}
				onChange={onInputChangeHandler}
			/>
			<AddCircleIcon
				onClick={onAjouterClickHandler}
				style={pointerStyle}
			/>
		</div>
	);
}

export default NewItemForm;
