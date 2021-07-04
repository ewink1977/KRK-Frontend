import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	showcaseContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '100%',
		minHeight: '400px',
		backgroundImage:
			"url('https://cdn.douglasavenue.com/krk/media/img/showcaseBG.png')",
		backgroundSize: 'cover',
	},
	showcaseInfobox: {
		padding: '1.5rem',
		marginLeft: '10px',
		marginRight: '10px',
	},
	showcaseHeader: {
		color: 'white',
	},
	showcaseParagraph: {
		color: 'white',
	},
	showcaseLogo: {
		width: '100%',
	},
	salesContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '1rem',
		marginBottom: '1rem',
	},
	salesBox: {
		minHeight: '450px',
		margin: '0 1rem',
	},
	salesBoxTitle: {
		marginBottom: '0.35rem',
	},
	salesMedia: {
		width: '100%',
		minHeight: '100px',
	},
	pitchContainer: {
		minHeight: '300px',
		backgroundColor: '#0d0d0d',
	},
}));
