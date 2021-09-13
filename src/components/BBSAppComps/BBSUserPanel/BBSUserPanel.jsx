import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';

import { useStyles } from './BBSUserPanel.Styles';

const BBSUserPanel = () => {
	const classes = useStyles();
	return (
		<div className={classes.userPanel}>
			<Grid container className={classes.userPanelContainer}>
				<img
					src='https://cdn.douglasavenue.com/krk/temp/profile_pics/117260996_10158507766660420_153007114564909748_o.jpg'
					alt='ewink'
					className={classes.userPanelImg}
				/>
				<Grid item className={classes.userPanelPersonal}>
					<Typography variant='h1' className={classes.userUserName}>
						@ewink
					</Typography>
					<Typography variant='h3' className={classes.userRealName}>
						Erin Winking
					</Typography>
					<Typography variant='h5'>Information Technology</Typography>
				</Grid>
			</Grid>
			<Grid item className={classes.userOptions}>
				<Button variant='outlined' color='primary' size='large'>
					LOGOUT
				</Button>
			</Grid>
		</div>
	);
};

export default BBSUserPanel;
