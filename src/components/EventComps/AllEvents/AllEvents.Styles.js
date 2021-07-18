import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	allEventsContainer: {
		boxShadow: '0 .2rem .3rem rgba(0,0,0,.45)',
	},
	eventListGrid: {
		display: 'flex',
		flexDirection: 'column',
	},
	eventListItem: {
		margin: '0.75rem 0.25rem',
	},
}));
