import React, { Fragment } from 'react';
import { Container, Grid, AppBar, Typography } from '@material-ui/core';
import Post from '../../PostComps/Post/Post';
import { useStyles } from './BBSMainApp.Styles';
import BBSUserPanel from '../BBSUserPanel/BBSUserPanel';
import BBSEventSummary from '../BBSEventSummary/BBSEventSummary';
import BBSAddPost from '../BBSAddPost/BBSAddPost';

const BBSMainApp = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<AppBar position='sticky' className={classes.appBar}>
				<Grid item>
					<Typography variant='h6'>MgRonald's</Typography>
				</Grid>
				<Grid item>
					<Typography variant='h6'>
						Better stuff here soon.
					</Typography>
				</Grid>
			</AppBar>
			<Container fixed className={classes.container}>
				<Grid item md={12} lg={6} className={classes.bbsLeftColumn}>
					<Post />
					<Post />
					<Post />
				</Grid>
				<Grid item md={12} lg={6} className={classes.bbsRightColumn}>
					<BBSUserPanel />
					<BBSEventSummary />
					<BBSAddPost />
				</Grid>
			</Container>
		</Fragment>
	);
};

export default BBSMainApp;
