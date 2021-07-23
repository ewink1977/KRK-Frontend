import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Post from '../Post/Post';

const StickyPostList = () => {
	const posts = useSelector((state) => state.posts);

	return !posts.length ? (
		<CircularProgress />
	) : (
		<Fragment>
			{posts
				.filter((post) => post.priority === 2)
				.map((stickyPost) => (
					<Post key={stickyPost.id} post={stickyPost} />
				))}
		</Fragment>
	);
};

export default StickyPostList;
