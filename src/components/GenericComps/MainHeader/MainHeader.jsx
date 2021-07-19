import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Grid,
	Typography,
	Avatar,
	IconButton,
} from '@material-ui/core';
import { useStyles } from './MainHeader.Styles';

const MainHeader = () => {
	const classes = useStyles();
	return (
		<AppBar position='sticky' className={classes.appBar}>
			<Grid item>
				<IconButton
					style={{ padding: '6px' }}
					component={Link}
					to='/bbs'>
					<img
						src='https://cdn.douglasavenue.com/krk/media/img/krk-icon.png'
						alt='KRK Logo'
						className={classes.menuIcon}
					/>
				</IconButton>
			</Grid>
			<Grid item>
				<Grid container className={classes.userPanelContainer}>
					<Typography variant='h6'>@ewink</Typography>
					<IconButton style={{ padding: '6px' }}>
						<Avatar
							alt='Username'
							src='https://cd-employeebbs-files.s3.amazonaws.com/profilePics/117260996_10158507766660420_153007114564909748_o_EtoVxuu.jpg?AWSAccessKeyId=AKIAYKWB4HILAVV26GWH&Signature=JZvMRgdbNaitZ3VxKQBHJKLh1i0%3D&Expires=1626320227'
						/>
					</IconButton>
				</Grid>
			</Grid>
		</AppBar>
	);
};

export default MainHeader;
