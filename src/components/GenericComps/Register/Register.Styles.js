import { makeStyles } from '@material-ui/core';
import { grey, blueGrey } from '@material-ui/core/colors';

export const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		padding: '0',
		boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important',
		borderRadius: '15px',
		minHeight: '100vh',
	},
	registerLeft: {
		backgroundImage:
			"url('https://douglasavenue.com/bbsimg/mgronald2.jpg')",
		backgroundPosition: 'top left',
		backgroundRepeat: 'no-repeat',
		minHeight: '100%',
	},
	registerRight: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%',
		width: '100%',
	},
	registerHeaderBlock: {
		padding: '2rem',
		marginBottom: '1rem',
	},
	registerBlockHeaderMd: {
		textAlign: 'center',
		fontFamily: "'Krona One', sans-serif",
		fontSize: '4.8rem',
		letterSpacing: '0.09rem',
	},
	registerBlockHeaderSm: {
		textAlign: 'center',
		fontFamily: "'Krona One', sans-serif",
		fontSize: '2.8rem',
		letterSpacing: '0.09rem',
	},
	registerBlockSubhead: {
		fontWeight: '400',
		fontSize: '1rem',
		textTransform: 'uppercase',
		textAlign: 'center',
		fontFamily: "'Kanit', sans-serif",
		letterSpacing: '0.13rem',
		color: grey[500],
		marginTop: '0.3rem',
	},
	registerFormBlock: {
		padding: '0.5rem 1rem',
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: '1px',
		borderRadius: '10px',
		boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
		margin: '0.5rem',
	},
	registerFormHeader: {
		fontWeight: '700',
		fontSize: '2rem',
	},
	registerButtonContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	registerButton: {
		marginLeft: '0.5rem',
	},
	registerHelper: {
		fontSize: '0.8rem',
		color: blueGrey[600],
		margin: '0.5rem 0',
	},
}));
