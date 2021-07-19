import React from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost';

const PostWithReplies = () => {
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
				<Post />
			</Grid>
			<Grid item md={8}>
				<Post />
				<Post />
			</Grid>
			<AddPost />
		</Container>
	);
};

export default PostWithReplies;
