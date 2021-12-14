import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import TodoContext from '../store/todo-context';
import classes from './Modal.module.css';

const Backdrop = () => {
	const [, dispatch] = useContext(TodoContext);

	const onBackDropClickHandler = () => {
		dispatch({
			type: 'IS_ADDING',
			payload: { isAdding: false },
		});
	};
	return (
		<div onClick={onBackDropClickHandler} className={classes.backdrop} />
	);
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

export const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};
