import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
	userPanel: {
		borderBottom: '1px solid black',
		minHeight: '250px',
		width: '100%',
	},
	userPanelContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		margin: '1rem 0.5rem 0.5rem 0.5rem',
	},
	userPanelImg: {
		borderRadius: '10px',
		boxShadow: '0 .2rem .3rem rgba(0,0,0,.45)',
		width: '150px',
		height: '150px',
	},
	userPanelPersonal: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '0.75rem',
		padding: '0.2rem',
	},
	userUserName: {
		fontFamily: "'Khula', sans-serif",
		fontWeight: '800',
		fontSize: '3rem',
		lineHeight: '1',
	},
	userRealName: {
		fontFamily: "'Kanit', sans-serif",
		fontWeight: '200',
		fontSize: '2rem',
		lineHeight: '1',
		// color: grey[500],
	},
	userDepartment: {
		fontFamily: "'Kanit', sans-serif",
		fontWeight: '100',
		fontSize: '0.75rem',
		lineHeight: '1',
	},
	userOptions: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '1rem',
	},
}));
