import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(() => ({
	eventCardContainer: {
		width: '90%',
		minHeight: '300px',
		border: '1px solid',
		borderColor: grey[100],
		margin: '0.5rem 0',
	},
	eventContentContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '0.75rem',
	},
	eventHeader: {
		fontSize: '4.5rem',
		fontFamily: "'Kanit', sans-serif",
		fontWeight: '800',
	},
	adminButtonGroup: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'no-wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: '0.5rem',
		padding: '0.25rem',
	},
}));
