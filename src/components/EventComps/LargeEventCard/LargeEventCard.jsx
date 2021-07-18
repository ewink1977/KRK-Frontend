import React from 'react';
import { Paper, Typography, Grid, Button } from '@material-ui/core';

import { useStyles } from './LargeEventCard.Styles';

const LargeEventCard = () => {
	const classes = useStyles();
	return (
		<Grid item align='center'>
			<Paper className={classes.eventCardContainer}>
				<Grid container className={classes.eventContentContainer}>
					<Typography variant='h2' className={classes.eventHeader}>
						Labor Day
					</Typography>
					<Typography variant='h4'>Storewide</Typography>
					<Typography variant='h5'>
						On Monday, September 6, 2021
					</Typography>
					<Typography variant='h6'>Added by @ewink</Typography>
					<Typography variant='body2'>
						Everyone makes double pay if you work! If not, you still
						get eight hours! Enjoy!
					</Typography>
					<Grid container className={classes.adminButtonGroup}>
						<Button
							variant='contained'
							style={{ marginLeft: '0.25rem' }}>
							New Event
						</Button>
						<Button
							variant='contained'
							color='primary'
							style={{ marginLeft: '0.25rem' }}>
							Edit Event
						</Button>
						<Button
							variant='contained'
							color='secondary'
							style={{ marginLeft: '0.25rem' }}>
							Delete Event
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default LargeEventCard;
