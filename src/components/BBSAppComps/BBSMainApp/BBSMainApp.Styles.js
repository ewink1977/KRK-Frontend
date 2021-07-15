import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: grey[900],
		padding: '0.5rem 3rem',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap-reverse',
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: grey[100],
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
		backgroundColor: grey[500],
	},
}));
