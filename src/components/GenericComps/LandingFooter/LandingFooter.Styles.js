import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	footerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '30px',
		backgroundColor: 'white',
	},
	footerText: {
		fontSize: '0.5rem',
	},
}));
