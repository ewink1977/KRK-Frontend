import React from 'react';
import {
	Grid,
	Typography,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	CardActions,
	Button,
} from '@material-ui/core';
import Header from '../Header/Header';

import { useStyles } from './LandingPage.styles';

const LandingPage = () => {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<Grid container className={classes.showcaseContainer}>
				<Grid item md={12} lg={3}>
					<img
						src='https://cdn.douglasavenue.com/krk/media/img/krk-logo.png'
						alt='KRK Logo'
						className={classes.showcaseLogo}
					/>
				</Grid>
				<Grid item md={12} lg={4} className={classes.showcaseInfobox}>
					<Typography variant='h2' className={classes.showcaseHeader}>
						Welcome To KRK!
					</Typography>
					<Typography
						variant='body2'
						className={classes.showcaseParagraph}>
						KRK (pronounced ‘cork’) EBBS system is a digital
						corkboard for businesses that allows employees to
						communicate with each other, management to communicate
						with all employees, and event scheduling. Check out the
						information below to see more details on how KRK can
						help your business!
					</Typography>
				</Grid>
			</Grid>
			<Grid container className={classes.salesContainer}>
				<Grid item md={12} lg={3}>
					<Card className={classes.salesBox}>
						<CardActionArea>
							<CardMedia
								className={classes.salesMedia}
								image='https://cdn.douglasavenue.com/krk/media/img/post-sales-header.png'
								title='Posts!'
							/>
							<CardContent>
								<Typography
									variant='h4'
									component='h2'
									className={classes.salesBoxTitle}>
									Post Feed For Users!
								</Typography>
								<Typography variant='body2'>
									Users can post messages, as well as like and
									reply to messages other users’ post.
									Messages are segregated to departments, so
									it is as if each department has their own
									personal KRKBoard! Supervisors for that
									department can prioritize messages so they
									remain at the top of the message timeline,
									and site-wide supervisors can send messages
									to any department as well as pin sitewide
									messages to the top of the timeline!
								</Typography>
								<br />
								<Typography variant='body2'>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								LOGIN/REGISTER
							</Button>
							<Button size='small' color='primary'>
								CONTACT ERIN
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item md={12} lg={3}>
					<Card className={classes.salesBox}>
						<CardActionArea>
							<CardMedia
								className={classes.salesMedia}
								image='https://cdn.douglasavenue.com/krk/media/img/event-sales-header.png'
								title='Events!'
							/>
							<CardContent>
								<Typography
									variant='h4'
									component='h2'
									className={classes.salesBoxTitle}>
									Event Calendar For All!
								</Typography>
								<Typography variant='body2'>
									KRK comes with an event calendar for your
									staff! Events can be created as far in
									advance as you like and can be set to only
									be displayed for a single department or the
									entire site! Sometimes your users do not
									need to know about an event or project
									happening in another department, so no need
									to clutter up their event calendar.
								</Typography>
								<br />
								<Typography variant='body2'>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								LOGIN/REGISTER
							</Button>
							<Button size='small' color='primary'>
								CONTACT ERIN
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item md={12} lg={3}>
					<Card className={classes.salesBox}>
						<CardActionArea>
							<CardMedia
								className={classes.salesMedia}
								image='https://cdn.douglasavenue.com/krk/media/img/user-sales-header.png'
								title='Users!'
							/>
							<CardContent>
								<Typography
									variant='h4'
									component='h2'
									className={classes.salesBoxTitle}>
									Easy User Management!
								</Typography>
								<Typography variant='body2'>
									User management is KRK is simple. Users
									register their account, supervisors set
									their department as well as their access
									levels, and that is it! Users can upload
									their own profile pictures and set their own
									biographies. Supervisors and managers can of
									course edit anything necessary!
								</Typography>
								<br />
								<Typography variant='body2'>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								LOGIN/REGISTER
							</Button>
							<Button size='small' color='primary'>
								CONTACT ERIN
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
			<Grid container className={classes.pitchContainer}>
				<h2>Final Pitch Here</h2>
			</Grid>
		</div>
	);
};

export default LandingPage;
