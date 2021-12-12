import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import React from 'react';
import ReactDOM from 'react-dom';
import classes from './NoDataMessageAlert.module.css';

ReactDOM.createPortal(
	<NoDataMessageAlert />,
	document.getElementById('overlays')
);

function NoDataMessageAlert() {
	return (
		<Stack className={classes.noData} sx={{ width: '100%' }} spacing={2}>
			<Alert
				severity='error'
				/*action={
					<Button
						onClick={todoCtx.onBackDropHide}
						color='inherit'
						size='small'
					>
						UNDO
					</Button>
				}*/
			>
				<AlertTitle style={{ display: 'flex' }}>Error</AlertTitle>
				No entered text was detected — <strong>try again!</strong>
			</Alert>
		</Stack>
	);
}

export default NoDataMessageAlert;
