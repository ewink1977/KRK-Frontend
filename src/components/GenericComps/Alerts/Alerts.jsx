import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core/';
import { Alert } from '@material-ui/lab';

const Alerts = () => {
	const [open, setOpen] = useState(false);
	const error = useSelector((state) => state.errors);

	const handleClose = (e, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	if (error.status) {
		console.log("This shit ain't working right");
	}
	return (
		<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
			<Alert severity='error' onClose={handleClose}>
				This is a happy little test.
			</Alert>
		</Snackbar>
	);
};

export default Alerts;
