import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fragment, useContext, useState } from 'react';
import TodoContext from '../store/todo-context';
import { Modal } from './Modal';
import classes from './NewItemForm.module.css';
import NoData from './NoData';

function NewItemForm({ addNewItem }) {
	const todoCtx = useContext(TodoContext);

	const [enteredText, setEnteredText] = useState('');
	const [adding, isAdding] = useState(false);

	const onInputChangeHandler = (e) => {
		setEnteredText(e.target.value);
	};

	const onAjouterClickHandler = () => {
		setEnteredText('');
		if (enteredText === '') {
			todoCtx.onAdd();
		} else {
			todoCtx.onBackDropHide(); // To close the portal
			isAdding(false);
			addNewItem(enteredText, adding);
		}
	};

	const pointerStyle = { cursor: 'pointer' };

	return (
		<Fragment>
			{todoCtx.isNoData && <NoData />}
			<Modal>
				<div className={classes.newItem__control__container}>
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
			</Modal>
		</Fragment>
	);
}

export default NewItemForm;
