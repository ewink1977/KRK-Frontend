import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
	eventCard: {
		borderRadius: '8px',
		margin: '0.2rem',
		overflow: 'hidden',
	},
	eventCardContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		minHeight: '100px',
		width: '100%',
		paddingLeft: '0',
	},
	eventCardLeft: {
		minWidth: '35px',
		alignSelf: 'stretch',
		backgroundColor: red[800],
		overflow: 'hidden',
	},
	eventCardContent: {
		paddingTop: '0.3rem',
		paddingBottom: '0.3rem',
	},
	eventCardHeader: {
		fontFamily: "'Anton', sans-serif",
		fontWeight: '800',
		marginTop: '0.2rem',
	},
}));
