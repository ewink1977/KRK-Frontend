import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	footerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '2.5rem',
		backgroundColor: 'white',
		position: 'absolute',
		bottom: '0',
		width: '100%',
		borderTop: '1px dotted black',
	},
	footerText: {
		fontSize: '0.5rem',
	},
}));
