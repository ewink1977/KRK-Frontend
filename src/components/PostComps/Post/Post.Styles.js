import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	postBody: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		width: '90%',
		padding: '0.25rem',
		margin: '0.5rem 0.5rem',
		minHeight: '230px',
	},
	postHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '0.25rem 0.25rem',
		margin: '0.25rem',
		width: '100%',
	},
	postHeaderAvatar: {
		height: '55px',
		width: '55px',
		marginLeft: '0.5rem',
		boxShadow: '0 .2rem .3rem rgba(0,0,0,.45)!important',
	},
	postHeaderUsername: {
		fontSize: '2rem',
		fontFamily: "'Anton', sans-serif",
		marginLeft: '0.5rem',
	},
	postHeaderFullName: {
		fontFamily: "'Kanit', sans-serif",
		fontWeight: '100',
		fontSize: '1.75rem',
		marginLeft: '0.5rem',
	},
	postContent: {
		padding: '0.15rem 0.25rem',
		margin: '0.4rem 1rem',
	},
	postInformation: {
		padding: '0.25rem',
	},
	postFooter: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: '0.2rem',
	},
}));
