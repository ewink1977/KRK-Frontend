import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap-reverse',
		justifyContent: 'center',
		alignItems: 'start',
		minHeight: '100vh',
	},
	bbsLeftColumn: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%',
		minHeight: '100vh',
	},
	bbsRightColumn: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		minHeight: '100vh',
		width: '100%',
	},
}));
