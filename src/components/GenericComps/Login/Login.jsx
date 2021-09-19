import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
	withWidth,
	Hidden,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import TestUserInfo from '../TestUserInfo/TestUserInfo';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

import { useStyles } from './Login.Styles';
import Alerts from '../Alerts/Alerts';

const Login = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const classes = useStyles();
	// I want to resize some fonts at breakpoints to avoid overflow!
	const theme = useTheme();
	const sizeMatches = useMediaQuery(theme.breakpoints.up('md'));

	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});

	const clear = () => {
		setLoginData({
			username: '',
			password: '',
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(loginData.username, loginData.password));
		clear();
	};

	if (auth.isAuthenticated) {
		return <Redirect to='/bbs' />;
	} else {
		return (
			<Container maxWidth='lg' className={classes.container}>
				<Hidden smDown>
					<Grid item md={5} className={classes.loginLeft}>
						<Grid item className={classes.loginTestUserBlock}>
							<TestUserInfo />
						</Grid>
					</Grid>
				</Hidden>
				<Grid item md={9} sm={12} className={classes.loginRight}>
					<Grid item className={classes.loginHeaderBlock}>
						<Alerts />
						<Typography
							variant='h1'
							className={
								sizeMatches
									? classes.loginBlockHeaderMd
									: classes.loginBlockHeaderSm
							}>
							MgRONALD'S
						</Typography>
						<Typography className={classes.loginBlockSubhead}>
							Employee Digital Bulletin Board System
						</Typography>
					</Grid>
					<Grid item className={classes.loginFormBlock}>
						<Typography
							variant='caption'
							display='block'
							gutterBottom
							className={classes.loginFormWarning}>
							This system is for MgRonald's employees only! Any
							unauthorized access is bad, mmkay?
						</Typography>
						<Typography
							variant='h4'
							className={classes.loginFormHeader}>
							Employee Login
						</Typography>
						<hr />
						<form>
							<TextField
								id='username'
								label='Username'
								placeholder='Your @username'
								fullWidth
								margin='normal'
								InputLabelProps={{ shrink: true }}
								variant='outlined'
								value={loginData.username}
								onChange={(e) =>
									setLoginData({
										...loginData,
										username: e.target.value,
									})
								}
							/>
							<TextField
								id='password'
								label='Password'
								type='password'
								placeholder='Password'
								helperText='If you forgot your username or password, contact IT or your manager.'
								fullWidth
								margin='normal'
								InputLabelProps={{ shrink: true }}
								variant='outlined'
								value={loginData.password}
								onChange={(e) =>
									setLoginData({
										...loginData,
										password: e.target.value,
									})
								}
							/>
							<Grid
								container
								className={classes.loginButtonContainer}>
								<Button
									variant='contained'
									size='medium'
									onClick={handleSubmit}
									className={classes.loginButtonSubmit}>
									Log In
								</Button>
								<Button
									variant='contained'
									size='medium'
									color='secondary'
									onClick={clear}
									className={classes.loginButton}>
									Clear
								</Button>
							</Grid>
						</form>
						<Typography
							align='right'
							variant='body1'
							className={classes.loginHelper}>
							If you do not have an account yet, please{' '}
							<Link to='/register'>register here</Link>!
						</Typography>
						<Hidden mdUp>
							<Grid
								item
								className={classes.loginTestUserBlockMob}>
								<TestUserInfo />
							</Grid>
						</Hidden>
					</Grid>
				</Grid>
			</Container>
		);
	}
};

Login.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Login);
