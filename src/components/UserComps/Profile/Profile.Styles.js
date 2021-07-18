import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	profileContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0.5rem',
		minHeight: '90vh',
	},
	userInfoBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid black',
		borderRadius: '10px',
		boxShadow: '0 .2rem .3rem rgba(0,0,0,.45)',
		padding: '1rem 0.3rem',
		marginTop: '1rem',
	},
	userInfoH1: {
		fontFamily: "'Anton', sans-serif",
	},
	userInfoH1XS: {
		fontFamily: "'Anton', sans-serif",
		fontSize: '2rem',
	},
	userProfileImage: {
		maxWidth: '300px',
		borderRadius: '5px',
	},
	userPostContainer: {
		marginTop: '1.5rem',
	},
	userPostColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
