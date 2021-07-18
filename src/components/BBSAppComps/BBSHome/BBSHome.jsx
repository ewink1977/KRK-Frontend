import React from 'react';
import { useStyles } from './BBSHome.Styles';
import { Container, Grid } from '@material-ui/core';
import Post from '../../PostComps/Post/Post';
import BBSUserPanel from '../BBSUserPanel/BBSUserPanel';
import BBSEventSummary from '../BBSEventSummary/BBSEventSummary';
import BBSAddPost from '../BBSAddPost/BBSAddPost';

const BBSHome = () => {
	const classes = useStyles();
	return (
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
	);
};

export default BBSHome;
