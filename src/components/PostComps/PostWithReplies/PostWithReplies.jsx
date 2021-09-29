import React, { useEffect } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePost } from '../../../actions/posts';
import { useParams } from 'react-router';

const PostWithReplies = () => {
	const dispatch = useDispatch();
	const { postID } = useParams();
	console.log('This page is loading...');

	useEffect(() => {
		dispatch(getSinglePost(postID));
	}, []);

	const post = useSelector((state) => state.posts);

	return (
		<Container maxWidth='md'>
			<Grid item sm={10} align='right' style={{ margin: '0.5rem 0' }}>
				<Button
					variant='outlined'
					color='primary'
					startIcon={<BackspaceIcon />}>
					Back To Home
				</Button>
			</Grid>
			<Grid item md={11}>
				<h1>POST {postID} HERE</h1>
				<Post post={post} />
			</Grid>
			<Grid item md={8}>
				<h2>REPLIES HERE</h2>
			</Grid>
			<AddPost />
		</Container>
	);
};

export default PostWithReplies;
