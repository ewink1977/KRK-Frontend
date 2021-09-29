import React from 'react';
import { AppBar, Grid, Button } from '@material-ui/core';
import { useStyles } from './LandingHeader.Styles';

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
				<Button href='/register' color='inherit'>
					Register
				</Button>
				<Button href='/login' color='inherit'>
					Login
				</Button>
			</Grid>
		</AppBar>
	);
};

export default Header;
