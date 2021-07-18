import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles(() => ({
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: grey[900],
		padding: '0 0.5rem',
	},
	menuIcon: {
		maxHeight: '35px',
		marginTop: '2px',
		marginBottom: '2px',
	},
	userPanelContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));
