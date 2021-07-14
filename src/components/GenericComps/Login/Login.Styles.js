import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		padding: '0',
		boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important',
		borderRadius: '15px',
	},
	loginLeft: {
		display: 'flex',
		backgroundImage: "url('http://douglasavenue.com/bbsimg/mgronald1.jpg')",
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat',
		minHeight: '800px',
	},
	loginTesterBlock: {
		alignSelf: 'center',
		backgroundColor: 'aliceblue',
		opacity: '80%',
		padding: '1rem',
		maxWidth: '100%',
	},
	loginTesterSmall: {
		alignSelf: 'center',
		width: '100%',
		backgroundColor: 'aliceblue',
		padding: '1rem',
		maxWidth: '100%',
		borderColor: 'black',
		borderWidth: '1px',
		borderStyle: 'solid',
	},
	testerBlockHeader: {
		marginBottom: '15px',
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFamily: "'Bowlby One SC', cursive",
	},
	testerBlockText: {
		textAlign: 'justify',
		paddingTop: '2px',
		paddingBottom: '2px',
	},
	loginRight: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '800px',
		width: '100%',
	},
	loginHeaderBlock: {
		padding: '2rem',
		marginBottom: '1rem',
	},
	loginBlockHeaderMd: {
		textAlign: 'center',
		fontFamily: "'Krona One', sans-serif",
		fontSize: '3.5rem',
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
		color: 'grey',
	},
	loginFormBlock: {
		padding: '1.5rem',
	},
	loginFormPaper: {
		padding: '0.5rem',
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
		margin: '0.5rem',
	},
}));
