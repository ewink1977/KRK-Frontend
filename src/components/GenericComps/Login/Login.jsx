import React from 'react';
import {
	Container,
	Grid,
	Typography,
	Paper,
	TextField,
	Button,
	withWidth,
	Hidden,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { useStyles } from './Login.Styles';

const Login = (props) => {
	const classes = useStyles();
	// I want to resize some fonts at breakpoints to avoid overflow!
	const theme = useTheme();
	const sizeMatches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<div>
			<Container maxWidth='md' className={classes.container}>
				<Hidden smDown>
					<Grid item md={5} className={classes.loginLeft}>
						<Grid item className={classes.loginTesterBlock}>
							<Typography
								variant='h4'
								className={classes.testerBlockHeader}>
								Test Users!
							</Typography>
							<Typography
								variant='body2'
								className={classes.testerBlockText}>
								If you want to take a look around the system,
								please feel free to create an account. You can
								log in with the a test user account, username{' '}
								<strong>testuser</strong> and the password{' '}
								<strong>testuserpassword</strong>.
							</Typography>
							<Typography
								variant='body2'
								className={classes.testerBlockText}>
								This will give you basic user access which will
								let you use the Time Management System, post
								messages, reply to messages, and view events!
							</Typography>
							<Typography
								variant='body2'
								className={classes.testerBlockText}>
								You can check out all of the features via the{' '}
								<a
									href='https://douglasavenue.com/ebbsdoc/documentation.html'
									target='_blank'
									rel='noopener noreferrer'>
									project's documentation
								</a>
								!
							</Typography>
						</Grid>
					</Grid>
				</Hidden>
				<Grid item md={8} sm={12} className={classes.loginRight}>
					<Grid item className={classes.loginHeaderBlock}>
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
						<Paper className={classes.loginFormPaper}>
							<Typography
								variant='caption'
								display='block'
								gutterBottom
								className={classes.loginFormWarning}>
								This system is for MgRonald's employees only!
								Any unauthorized access is bad, mmkay?
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
									placeholder='Input Your @Username Here!'
									fullWidth
									margin='normal'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
								/>
								<TextField
									id='password'
									label='Password'
									type='password'
									placeholder='Input Your Password Here!'
									helperText='If you forgot your username or password, contact IT.'
									fullWidth
									margin='normal'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
								/>
								<Grid
									container
									className={classes.loginButtonContainer}>
									<Button
										variant='contained'
										size='medium'
										color='primary'
										className={classes.loginButton}>
										Log In!
									</Button>
									<Button
										variant='contained'
										size='medium'
										color='secondary'
										className={classes.loginButton}>
										Clear
									</Button>
								</Grid>
							</form>
							<Hidden mdUp>
								<Grid item className={classes.loginTesterSmall}>
									<Typography
										variant='h4'
										className={classes.testerBlockHeader}>
										Test Users!
									</Typography>
									<Typography
										variant='body2'
										className={classes.testerBlockText}>
										If you want to take a look around the
										system, please feel free to create an
										account. You can log in with the a test
										user account, username{' '}
										<strong>testuser</strong> and the
										password{' '}
										<strong>testuserpassword</strong>.
									</Typography>
									<Typography
										variant='body2'
										className={classes.testerBlockText}>
										This will give you basic user access
										which will let you use the Time
										Management System, post messages, reply
										to messages, and view events!
									</Typography>
									<Typography
										variant='body2'
										className={classes.testerBlockText}>
										You can check out all of the features
										via the{' '}
										<a
											href='https://douglasavenue.com/ebbsdoc/documentation.html'
											target='_blank'
											rel='noopener noreferrer'>
											project's documentation
										</a>
										!
									</Typography>
								</Grid>
							</Hidden>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

Login.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Login);
