import React from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';

import { useStyles } from './SingleEvent.Styles';
import LargeEventCard from '../LargeEventCard/LargeEventCard';

const SingleEvent = () => {
	const classes = useStyles();
	return (
		<Container className={classes.singleEventContainer}>
			<Grid
				item
				align='right'
				className={classes.returnToEventsContainer}>
				<Button
					variant='outlined'
					color='primary'
					startIcon={<BackspaceIcon />}>
					Return To Events
				</Button>
			</Grid>
			<Grid item className={classes.singleEvent}>
				<LargeEventCard />
			</Grid>
		</Container>
	);
};

export default SingleEvent;
