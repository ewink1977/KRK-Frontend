import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useStyles } from './BBSHome.Styles';

import { getPosts } from '../../../actions/posts';

import BBSUserPanel from '../BBSUserPanel/BBSUserPanel';
import BBSEventSummary from '../BBSEventSummary/BBSEventSummary';
import AddPost from '../../PostComps/AddPost/AddPost';
import PostList from '../../PostComps/PostList/PostList';

const BBSHome = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container fixed className={classes.container}>
			<Grid item md={12} lg={6} className={classes.bbsLeftColumn}>
				<PostList />
			</Grid>
			<Grid item md={12} lg={6} className={classes.bbsRightColumn}>
				<BBSUserPanel />
				<BBSEventSummary />
				<AddPost />
			</Grid>
		</Container>
	);
};

export default BBSHome;
