import { makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

export const useStyles = makeStyles(() => ({
	eventSummaryContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		border: '1px solid',
		borderColor: blueGrey[300],
		borderRadius: '10px',
		boxShadow: '0 .2rem .3rem rgba(0,0,0,.45)',
		margin: '0.5rem 0.5rem',
		padding: '0.66rem',
		width: '100%',
		minHeight: '300px',
	},
	eventHeader: {
		fontFamily: "'Khula', sans-serif",
		fontWeight: '800',
	},
	eventSummaryButton: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '1rem',
		width: 'inherit',
	},
}));
