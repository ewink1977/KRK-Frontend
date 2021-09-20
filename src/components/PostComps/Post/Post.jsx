import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
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

const Post = ({ post }) => {
	const currentUser = useSelector((state) => state.auth);
	const classes = useStyles();
	console.log(post);
	const accessLevel = currentUser.user.userProfile.access_level;
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
						src={post.author.userProfile.image}
					/>
					<Typography className={classes.postHeaderUsername}>
						@{post.author.username}
					</Typography>
					<Hidden xsDown>
						<Typography className={classes.postHeaderFullName}>
							{post.author.first_name} {post.author.last_name}
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
