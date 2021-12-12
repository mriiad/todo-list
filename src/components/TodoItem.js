import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import classes from './TodoItem.module.css';

function TodoItem({ id, content, deleteTodoItem }) {
	const [itemContent, setItemContent] = useState('');
	const [itemId, setItemId] = useState('');

	useEffect(() => {
		setItemContent(content);
		setItemId(id);
	}, [content, id]);

	const onDeleteClickHandler = () => {
		deleteTodoItem(itemId);
	};

	const pointerStyle = { cursor: 'pointer' };

	return (
		<div className={classes.todoItem}>
			<span>{itemContent}</span>
			<DeleteIcon onClick={onDeleteClickHandler} style={pointerStyle} />
		</div>
	);
}

export default TodoItem;
