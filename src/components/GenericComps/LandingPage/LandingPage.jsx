import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
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
			<Grid container spacing={3} className={classes.salesContainer}>
				<Grid item md={12} lg={3}>
					<Card>
						<CardContent>
							<Typography variant='h3'>Sales Box One</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quasi alias odit laborum, odio
								suscipit quis est provident eos minima
								perspiciatis ipsam eius qui expedita fugit
								sapiente impedit adipisci soluta! Ad rem, veniam
								a provident delectus natus veritatis nobis
								maiores consectetur necessitatibus. Natus eaque
								iure eius.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item md={12} lg={3}>
					<Card>
						<CardContent>
							<Typography variant='h3'>Sales Box Two</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quasi alias odit laborum, odio
								suscipit quis est provident eos minima
								perspiciatis ipsam eius qui expedita fugit
								sapiente impedit adipisci soluta! Ad rem, veniam
								a provident delectus natus veritatis nobis
								maiores consectetur necessitatibus. Natus eaque
								iure eius.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item md={12} lg={3}>
					<Card>
						<CardContent>
							<Typography variant='h3'>
								Sales Box Three
							</Typography>
							<Typography variant='body2'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quasi alias odit laborum, odio
								suscipit quis est provident eos minima
								perspiciatis ipsam eius qui expedita fugit
								sapiente impedit adipisci soluta! Ad rem, veniam
								a provident delectus natus veritatis nobis
								maiores consectetur necessitatibus. Natus eaque
								iure eius.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default LandingPage;
