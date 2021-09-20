import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';

import { useStyles } from './BBSUserPanel.Styles';
import { logoutUser } from '../../../actions/auth';

const BBSUserPanel = () => {
	const dispatch = useDispatch();
	const classes = useStyles();

	const currentUser = useSelector((state) => state.auth.user);

	const logout = () => {
		dispatch(logoutUser());
		console.log('Logout Was Clicked!');
	};

	return (
		<div className={classes.userPanel}>
			<Grid container className={classes.userPanelContainer}>
				<img
					src={currentUser.userProfile.image}
					alt={currentUser.username}
					className={classes.userPanelImg}
				/>
				<Grid item className={classes.userPanelPersonal}>
					<Typography variant='h1' className={classes.userUserName}>
						@{currentUser.username}
					</Typography>
					<Typography variant='h3' className={classes.userRealName}>
						{currentUser.first_name} {currentUser.last_name}
					</Typography>
					<Typography variant='h5'>
						Department Here Eventually
					</Typography>
				</Grid>
			</Grid>
			<Grid item className={classes.userOptions}>
				<Button
					variant='outlined'
					color='primary'
					size='large'
					onClick={logout}>
					LOGOUT
				</Button>
			</Grid>
		</div>
	);
};

export default BBSUserPanel;
