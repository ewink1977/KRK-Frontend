import React, { Fragment } from 'react';
import {
	Card,
	CardContent,
	Avatar,
	Typography,
	Divider,
	Hidden,
} from '@material-ui/core';
import { Reply, Favorite, Info } from '@material-ui/icons';
import { blue, pink, red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { useStyles } from './Post.Styles';

const Post = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Card className={classes.postBody}>
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
					<Typography variant='body1'>
						Hey hey, MgRonald's staff! Did you know MgRonald's is a
						fake McDonald's used in anime? Now you do! Boy, I love
						anime almost as much as coding!
					</Typography>
				</CardContent>
				<CardContent className={classes.postInformation}>
					<Typography variant='caption' align='left'>
						<Link to='/bbs'>Saturday, Feb. 20, 2021 @ 8:58 PM</Link>
					</Typography>
				</CardContent>
				<Divider variant='middle' />
				<CardContent className={classes.postFooter}>
					<Reply fontSize='large' style={{ color: blue[900] }} />
					<Favorite fontSize='large' style={{ color: pink[500] }} />
					<Info fontSize='large' style={{ color: red[900] }} />
				</CardContent>
			</Card>
		</Fragment>
	);
};

export default Post;
