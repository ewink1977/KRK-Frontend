import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	AppBar,
	Grid,
	Typography,
	Avatar,
	IconButton,
} from '@material-ui/core';
import { useStyles } from './MainHeader.Styles';

const MainHeader = () => {
	const currentUser = useSelector((state) => state.auth.user);

	const classes = useStyles();
	return (
		<AppBar position='sticky' className={classes.appBar}>
			<Grid item>
				<IconButton
					style={{ padding: '6px' }}
					component={Link}
					to='/bbs'>
					<img
						src='https://cdn.douglasavenue.com/krk/media/img/krk-icon.png'
						alt='KRK Logo'
						className={classes.menuIcon}
					/>
				</IconButton>
			</Grid>
			<Grid item>
				<Grid container className={classes.userPanelContainer}>
					<Typography variant='h6'>
						@{currentUser.username}
					</Typography>
					<IconButton style={{ padding: '6px' }}>
						<Avatar
							alt={currentUser.username}
							src={currentUser.userProfile.image}
						/>
					</IconButton>
				</Grid>
			</Grid>
		</AppBar>
	);
};

export default MainHeader;
