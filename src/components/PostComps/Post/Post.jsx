import React, { Fragment } from 'react';
import {
	Card,
	CardContent,
	Avatar,
	Typography,
	Divider,
	Hidden,
	IconButton,
} from '@material-ui/core';
import moment from 'moment';
import Reply from '@material-ui/icons/Reply';
import Favorite from '@material-ui/icons/Favorite';
import Info from '@material-ui/icons/Info';
import { blue, pink, red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { useStyles } from './Post.Styles';

const Post = ({ post }) => {
	const classes = useStyles();
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
						src='https://cd-employeebbs-files.s3.amazonaws.com/profilePics/117260996_10158507766660420_153007114564909748_o_EtoVxuu.jpg?AWSAccessKeyId=AKIAYKWB4HILAVV26GWH&Signature=JZvMRgdbNaitZ3VxKQBHJKLh1i0%3D&Expires=1626320227'
					/>
					<Typography className={classes.postHeaderUsername}>
						@ewink
					</Typography>
					<Hidden xsDown>
						<Typography className={classes.postHeaderFullName}>
							Erin Winking
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
						| Delete Post
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
							style={{ color: pink[500] }}
						/>
					</IconButton>
					<Info fontSize='large' style={{ color: red[900] }} />
				</CardContent>
			</Card>
		</Fragment>
	);
};

export default Post;
