import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Post from '../Post/Post';

const StorewidePostList = () => {
	const posts = useSelector((state) => state.posts);

	return !posts.length ? (
		<CircularProgress />
	) : (
		<Fragment>
			{posts
				.filter((post) => post.department === 9)
				.map((storewidePost) => (
					<Post key={storewidePost.id} post={storewidePost} />
				))}
		</Fragment>
	);
};

export default StorewidePostList;
