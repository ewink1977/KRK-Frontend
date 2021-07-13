import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#0d0d0d',
	},
	menuIcon: {
		maxHeight: '35px',
		marginTop: '2px',
		marginBottom: '2px',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));
