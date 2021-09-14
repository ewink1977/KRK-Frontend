import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function CustomizedSnackbars() {
	const [state, setState] = useState({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});

	const { vertical, horizontal, open } = state;
	const error = useSelector((state) => state.errors);

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (error.status) {
	// 		console.log("Shit still isn't working and it's annoying me...");
	// });

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			autoHideDuration={3000}
			onClose={handleClose}>
			<Alert onClose={handleClose} severity='error'>
				This is a happy little test.
			</Alert>
		</Snackbar>
	);
}
