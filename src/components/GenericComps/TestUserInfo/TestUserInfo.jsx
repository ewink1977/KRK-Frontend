import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from './TestUserInfo.Styles';

const TestUserInfo = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Typography variant='h4' className={classes.testUserHeader}>
				Test Users!
			</Typography>
			<Typography
				variant='body2'
				paragraph='true'
				className={classes.testUserText}>
				If you want to take a look around the system, please feel free
				to <Link to='/register'>create an account</Link>. You can also
				log in with the test user account, username:{' '}
				<strong>testuser</strong> and the password:{' '}
				<strong>testuserpassword</strong>.
			</Typography>
			<Typography
				variant='body2'
				paragraph='true'
				className={classes.testUserText}>
				This will give you basic user access which will let you use the
				Time Management System, post messages, reply to messages, and
				view events!
			</Typography>
			<Typography
				variant='body2'
				paragraph='true'
				className={classes.testUserText}>
				You can check out all of the features via the{' '}
				<a
					href='https://douglasavenue.com/ebbsdoc/documentation.html'
					target='_blank'
					rel='noopener noreferrer'>
					project's documentation
				</a>
				!
			</Typography>
		</Fragment>
	);
};

export default TestUserInfo;
