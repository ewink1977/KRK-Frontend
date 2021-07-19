import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import { useStyles } from './BBSEventSummary.Styles';

import EventCard from '../../EventComps/EventCard/EventCard';

const BBSEventSummary = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.eventSummaryContainer}>
			<Typography variant='h3' className={classes.eventHeader}>
				Upcoming Events
			</Typography>
			<EventCard />
			<Grid item className={classes.eventSummaryButton}>
				<Button
					variant='outlined'
					color='primary'
					size='large'
					component={Link}
					to='/bbs/events'>
					SEE ALL EVENTS
				</Button>
			</Grid>
		</Grid>
	);
};

export default BBSEventSummary;
