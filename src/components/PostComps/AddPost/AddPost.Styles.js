import { makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

export const useStyles = makeStyles(() => ({
	addPostContainer: {
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
		minHeight: '200px',
	},
	addPostHeader: {
		fontFamily: "'Khula', sans-serif",
		fontWeight: '800',
	},
	addPostForm: {
		display: 'flex',
		flexDirection: 'column',
		width: '97%',
		margin: '0.5rem',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	addPostButtonRow: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	addPostFormControl: {
		marginLeft: '0.25rem',
	},
}));
