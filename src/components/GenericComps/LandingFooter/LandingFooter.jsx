import React from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './LandingFooter.Styles';

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footerContainer}>
			<Typography className={classes.footerText}>
				©2021 Erin M. Winking - Tacoma, Washington
			</Typography>
		</footer>
	);
};

export default Footer;
