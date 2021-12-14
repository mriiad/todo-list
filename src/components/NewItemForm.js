import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fragment, useContext, useState } from 'react';
import TodoContext from '../store/todo-context';
import { uid } from '../utils/uid';
import { Modal } from './Modal';
import classes from './NewItemForm.module.css';
import NoDataMessageAlert from './NoDataMessageAlert';

function NewItemForm() {
	const [state, dispatch] = useContext(TodoContext);

	const [enteredText, setEnteredText] = useState('');

	const onInputChangeHandler = (e) => {
		setEnteredText(e.target.value);
	};

	const onAjouterClickHandler = () => {
		setEnteredText('');
		if (enteredText === '') {
			dispatch({
				type: 'NO_DATA',
				payload: { isNoData: true },
			});
		} else {
			dispatch({
				type: 'ADD_ITEM',
				payload: { contentText: enteredText, contentId: uid() },
			});
		}
	};

	const pointerStyle = { cursor: 'pointer' };

	return (
		<Fragment>
			{state.isNoData && <NoDataMessageAlert />}
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
