import { makeStyles } from '@material-ui/core';
import { blueGrey, green, grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		padding: '0',
		boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important',
		borderRadius: '15px',
		minHeight: '100vh',
	},
	loginLeft: {
		display: 'flex',
		backgroundImage:
			"url('https://douglasavenue.com/bbsimg/mgronald1.jpg')",
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat',
		minHeight: '100%',
	},
	loginTestUserBlock: {
		alignSelf: 'center',
		backgroundColor: 'aliceblue',
		opacity: '80%',
		padding: '1rem',
		maxWidth: '100%',
	},
	loginTestUserBlockMob: {
		alignSelf: 'center',
		width: '100%',
		backgroundColor: 'aliceblue',
		padding: '1rem',
		maxWidth: '100%',
		borderColor: 'black',
		borderWidth: '1px',
		borderStyle: 'solid',
	},
	loginRight: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%',
		width: '100%',
	},
	loginHeaderBlock: {
		padding: '2rem',
		marginBottom: '1rem',
	},
	loginBlockHeaderMd: {
		textAlign: 'center',
		fontFamily: "'Krona One', sans-serif",
		fontSize: '4.8rem',
		letterSpacing: '0.09rem',
	},
	loginBlockHeaderSm: {
		textAlign: 'center',
		fontFamily: "'Krona One', sans-serif",
		fontSize: '2.8rem',
		letterSpacing: '0.09rem',
	},
	loginBlockSubhead: {
		fontWeight: '400',
		fontSize: '1rem',
		textTransform: 'uppercase',
		textAlign: 'center',
		fontFamily: "'Kanit', sans-serif",
		letterSpacing: '0.23rem',
		marginTop: '0.25rem',
		color: grey[500],
	},
	loginFormBlock: {
		padding: '0.5rem 1rem',
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: '1px',
		borderRadius: '10px',
		boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
		margin: '0.5rem',
	},
	loginFormHeader: {
		fontWeight: '700',
	},
	loginFormWarning: {
		color: 'darkred',
		fontWeight: '700',
		textAlign: 'center',
	},
	loginButtonContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	loginButton: {
		marginLeft: '0.5rem',
	},
	loginButtonSubmit: {
		marginLeft: '0.5rem',
		color: theme.palette.getContrastText(green[500]),
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
	loginHelper: {
		fontSize: '0.8rem',
		color: blueGrey[600],
		margin: '0.5rem 0',
	},
}));
