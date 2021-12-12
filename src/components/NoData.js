import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import TodoContext from '../store/todo-context';
import classes from './NoData.module.css';

ReactDOM.createPortal(<NoData />, document.getElementById('overlays'));

function NoData() {
	const todoCtx = useContext(TodoContext);

	return (
		<Stack className={classes.noData} sx={{ width: '100%' }} spacing={2}>
			<Alert
				severity='error'
				action={
					<Button
						onClick={todoCtx.onBackDropHide}
						color='inherit'
						size='small'
					>
						UNDO
					</Button>
				}
			>
				<AlertTitle style={{ display: 'flex' }}>Error</AlertTitle>
				This is an error alert — <strong>check it out!</strong>
			</Alert>
		</Stack>
	);
}

export default NoData;
