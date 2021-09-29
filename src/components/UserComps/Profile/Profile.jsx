import React from 'react';
import {
	Container,
	Grid,
	Typography,
	Button,
	useTheme,
	useMediaQuery,
	withWidth,
} from '@material-ui/core';
import Post from '../../PostComps/Post/Post';
import PropTypes from 'prop-types';
import { useStyles } from './Profile.Styles';

const Profile = () => {
	const classes = useStyles();
	const theme = useTheme();
	const sizeMatches = useMediaQuery(theme.breakpoints.up('sm'));
	return (
		<Container className={classes.profileContainer}>
			<Grid container spacing={2} className={classes.userInfoBox}>
				<Grid item md={6} align='right'>
					<Typography
						variant='h1'
						className={
							sizeMatches
								? classes.userInfoH1
								: classes.userInfoH1XS
						}>
						@ewink
					</Typography>
					<Typography variant={sizeMatches ? 'h4' : 'body2'}>
						Erin Winking
					</Typography>
					<Typography variant={sizeMatches ? 'h5' : 'body2'}>
						erin@douglasavenue.com
					</Typography>
					<Typography variant={sizeMatches ? 'h5' : 'body2'}>
						Digital Overseer
					</Typography>
					<Typography variant='caption'>
						I am the one who controls all of this! At least, for
						now...
					</Typography>
					<Typography variant={sizeMatches ? 'h5' : 'body1'}>
						Information Technology
					</Typography>
					<Button
						variant='contained'
						style={{ marginBottom: '10px' }}>
						Update Profile
					</Button>
				</Grid>
				<Grid item md={3} align='left'>
					<img
						className={classes.userProfileImage}
						alt='User'
						src='https://cdn.douglasavenue.com/krk/temp/profile_pics/117260996_10158507766660420_153007114564909748_o.jpg'
					/>
				</Grid>
			</Grid>
			<Grid container spacing={1} className={classes.userPostContainer}>
				<Grid item md={6} className={classes.userPostColumn}>
					<Typography
						variant='h4'
						align='center'
						style={{ fontWeight: '800' }}>
						ewink's Posts
					</Typography>
					<h3>POST</h3>
					<h3>POST</h3>
					<h3>POST</h3>
					<h3>POST</h3>
					<h3>POST</h3>
				</Grid>
				<Grid item md={6} className={classes.userPostColumn}>
					<Typography
						variant='h4'
						align='center'
						style={{ fontWeight: '800' }}>
						ewink's last 5 replies
					</Typography>
					<h3>REPLY</h3>
					<h3>REPLY</h3>
					<h3>REPLY</h3>
					<h3>REPLY</h3>
					<h3>REPLY</h3>
				</Grid>
			</Grid>
		</Container>
	);
};

Profile.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Profile);
