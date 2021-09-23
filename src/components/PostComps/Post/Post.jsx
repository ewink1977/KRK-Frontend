import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Card,
	CardContent,
	Avatar,
	Typography,
	Divider,
	Hidden,
	IconButton,
	Badge,
} from '@material-ui/core';
import moment from 'moment';
import Reply from '@material-ui/icons/Reply';
import Favorite from '@material-ui/icons/Favorite';
import Info from '@material-ui/icons/Info';
import { blue, pink, red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { useStyles } from './Post.Styles';
import { getPostAuthorData } from '../../../actions/posts';

const Post = ({ post }) => {
	const currentUser = useSelector((state) => state.auth);
	const classes = useStyles();
	const accessLevel = currentUser.user.userProfile.access_level;
	const [authorData, setAuthorData] = useState({
		first_name: '',
		last_name: '',
		username: '',
		image: '',
	});
	useEffect(() => {
		const url = `http://127.0.0.1:8000/api/postauthor/${post.author}`;

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const postAuthorInfo = await response.json();
				setAuthorData({
					first_name: postAuthorInfo.first_name,
					last_name: postAuthorInfo.last_name,
					username: postAuthorInfo.username,
					image: postAuthorInfo.userProfile.image,
				});
				console.log(authorData);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchData();
	}, []);
	return (
		<Fragment>
			<Card
				className={`${classes.postBody} ${
					post.priority === 2 ? classes.sticky : ''
				}`}>
				<CardContent className={classes.postHeader}>
					<Avatar
						className={classes.postHeaderAvatar}
						sizes='lg'
						src={authorData.image}
					/>
					<Typography className={classes.postHeaderUsername}>
						@{authorData.username}
					</Typography>
					<Hidden xsDown>
						<Typography className={classes.postHeaderFullName}>
							{authorData.first_name} {authorData.last_name}
						</Typography>
					</Hidden>
				</CardContent>
				<CardContent className={classes.postContent}>
					<Typography variant='body1'>{post.content}</Typography>
				</CardContent>
				<CardContent className={classes.postInformation}>
					<Typography variant='caption' align='left'>
						<Link to={`/bbs/post/${post.id}`}>
							{moment(post.created_at).format(
								'dddd, MMMM Do YYYY, h:mm:ss a'
							)}
						</Link>{' '}
						{accessLevel >= 2 ? '| Delete Post' : ' '}
					</Typography>
				</CardContent>
				<Divider variant='middle' />
				<CardContent className={classes.postFooter}>
					<IconButton>
						<Reply fontSize='large' style={{ color: blue[900] }} />
					</IconButton>

					<IconButton>
						<Favorite
							fontSize='large'
							style={{ color: pink[300] }}
						/>
						{post.likes ? (
							<Badge
								badgeContent={post.likes.length}
								color='secondary'
							/>
						) : (
							''
						)}
					</IconButton>

					<Info fontSize='large' style={{ color: red[900] }} />
				</CardContent>
			</Card>
		</Fragment>
	);
};

export default Post;
