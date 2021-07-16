import React from 'react';
import { Paper, Grid, Typography, Divider } from '@material-ui/core';
import { useStyles } from './EventCard.Style';

const EventCard = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.eventCard}>
			<Grid container spacing={3} className={classes.eventCardContainer}>
				<Grid item xs={2} className={classes.eventCardLeft}></Grid>
				<Grid item xs={10} className={classes.eventCardContent}>
					<Typography
						variant='h4'
						className={classes.eventCardHeader}>
						Labor Day
					</Typography>
					<Typography variant='caption'>September 1, 2021</Typography>
					<Divider light variant='middle' />
					<Typography variant='body2'>
						Labor Day is the first Monday in September! You will get
						paid for that day if you do not work, and if you are
						working, you will be paid double time! Thanks for being
						great!
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default EventCard;
