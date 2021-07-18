import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { useStyles } from './AllEvents.Styles';
import LargeEventCard from '../LargeEventCard/LargeEventCard';

const AllEvents = () => {
	const classes = useStyles();
	return (
		<Container className={classes.allEventsContainer}>
			<Grid container className={classes.eventListGrid}>
				<Grid
					item
					md={12}
					align='right'
					className={classes.eventListItem}>
					<Button variant='contained' color='primary' size='large'>
						Add Event
					</Button>
				</Grid>
				<Grid item md={12} className={classes.eventListItem}>
					<LargeEventCard />
					<LargeEventCard />
					<LargeEventCard />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AllEvents;
