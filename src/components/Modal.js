import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import TodoContext from '../store/todo-context';
import classes from './Modal.module.css';

const Backdrop = (props) => {
	const todoCtx = useContext(TodoContext);
	return (
		<div onClick={todoCtx.onBackDropHide} className={classes.backdrop} />
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
