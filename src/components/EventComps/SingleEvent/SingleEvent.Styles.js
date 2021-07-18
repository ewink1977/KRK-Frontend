import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	singleEventContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	returnToEventsContainer: {
		width: '100%',
		margin: '0.5rem 0',
	},
	singleEvent: {
		width: '100%',
	},
}));
