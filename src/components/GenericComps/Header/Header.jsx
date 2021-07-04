import React from 'react';
import { AppBar, Grid, Button } from '@material-ui/core';
import { useStyles } from './Header.styles';

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='sticky' className={classes.appBar}>
			<img
				src='https://cdn.douglasavenue.com/krk/media/img/krk-icon.png'
				alt='KRK Logo'
				className={classes.menuIcon}
			/>
			<Grid className={classes.menuButton}>
				<Button color='inherit'>Register</Button>
				<Button color='inherit'>Login</Button>
			</Grid>
		</AppBar>
	);
};

export default Header;
