import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Post from '../Post/Post';

const PostList = () => {
	const posts = useSelector((state) => state.posts);

	console.log(posts);
	return (
		<Fragment>
			<Post />
			<Post />
			<Post />
		</Fragment>
	);
};

export default PostList;
