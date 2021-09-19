import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import Post from '../Post/Post';

const PostList = () => {
	const posts = useSelector((state) => state.posts);

	return !posts.length ? (
		<CircularProgress />
	) : (
		<Fragment>
			{posts
				.slice()
				.filter((post) => post.priority === 1)
				.reverse()
				.map((filteredPost) => (
					<Post key={filteredPost.id} post={filteredPost} />
				))}
		</Fragment>
	);
};

export default PostList;
