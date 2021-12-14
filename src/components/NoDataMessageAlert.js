import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Expire from 'react-expire';
import TodoContext from '../store/todo-context';
import classes from './NoDataMessageAlert.module.css';
ReactDOM.createPortal(
	<NoDataMessageAlert />,
	document.getElementById('overlays')
);

function NoDataMessageAlert() {
	const [state, dispatch] = useContext(TodoContext);

	return (
		<Stack className={classes.noData} sx={{ width: '100%' }} spacing={2}>
			<Expire
				until={2000}
				onExpire={() => {
					dispatch({
						type: 'NO_DATA',
						payload: { isNoData: false },
					});
				}}
			>
				<Alert severity='error'>
					<AlertTitle style={{ display: 'flex' }}>Error</AlertTitle>
					No entered text was detected — <strong>try again!</strong>
				</Alert>
			</Expire>
		</Stack>
	);
}

export default NoDataMessageAlert;
