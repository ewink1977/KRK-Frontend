import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
	useTheme,
	useMediaQuery,
	withWidth,
	Hidden,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useStyles } from './Register.Styles';

const Register = () => {
	const dispatch = useDispatch();

	const [registerData, setRegisterData] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	});

	const clear = () => {
		setRegisterData({
			username: '',
			email: '',
			password: '',
			password2: '',
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(registerData)
	}

	const classes = useStyles();
	// Gotta shrink that header text to keep smaller screens looking PHRESH!
	const theme = useTheme();
	const sizeMatches = useMediaQuery(theme.breakpoints.up('md'));
	return (
		<Container maxWidth='lg' className={classes.container}>
			<Hidden smDown>
				<Grid item md={5} className={classes.registerLeft} />
			</Hidden>
			<Grid item md={9} sm={12} className={classes.registerRight}>
				<Grid item className={classes.registerHeaderBlock}>
					<Typography
						variant='h1'
						className={
							sizeMatches
								? classes.registerBlockHeaderMd
								: classes.registerBlockHeaderSm
						}>
						MgRONALD'S
					</Typography>
					<Typography className={classes.registerBlockSubhead}>
						Welcome to the Team! We're glad to have you aboard!
					</Typography>
				</Grid>
				<Grid item className={classes.registerFormBlock}>
					<Typography
						variant='h4'
						className={classes.registerFormHeader}>
						Sign up for an EBBS account!
					</Typography>
					<hr />
					<form>
						<TextField
							id='username'
							label='Username*'
							placeholder='Choose your @username!'
							helperText='Minimum of 8 characters, letters and numbers only!'
							fullWidth
							margin='dense'
							InputLabelProps={{ shrink: true }}
							variant='outlined'
							value={registerData.username}
							onChange={(e) =>
								setRegisterData({
									...registerData,
									username: e.target.value,
								})
							}
						/>
						<TextField
							id='email'
							label='Email Address*'
							type='email'
							fullWidth
							margin='dense'
							InputLabelProps={{ shrink: true }}
							variant='outlined'
							value={registerData.email}
							onChange={(e) =>
								setRegisterData({
									...registerData,
									email: e.target.value,
								})
							}
						/>
						<TextField
							id='password'
							label='Password*'
							type='password'
							placeholder='Choose a password!'
							helperText='Password must be at least 8 characters, can’t be too similar to your other personal information, can’t be a commonly used password, and can’t be entirely numeric.'
							fullWidth
							margin='dense'
							InputLabelProps={{ shrink: true }}
							variant='outlined'
							value={registerData.password}
							onChange={(e) =>
								setRegisterData({
									...registerData,
									password: e.target.value,
								})
							}
						/>
						<TextField
							id='passwordConfirm'
							label='Confirm Password*'
							type='password'
							placeholder='Confirm that password!'
							helperText='Enter the same password as before for verification.'
							fullWidth
							margin='dense'
							InputLabelProps={{ shrink: true }}
							variant='outlined'
							value={registerData.password2}
							onChange={(e) =>
								setRegisterData({
									...registerData,
									password2: e.target.value,
								})
							}
						/>
						<Typography
							variant='caption'
							color='error'
							display='block'>
							*All fields are <strong>REQUIRED</strong>.
						</Typography>
						<Typography
							variant='caption'
							color='textSecondary'
							display='block'>
							<strong>TEST USERS!</strong> There's no email
							validation required, so no need to use your real
							information if you don't want, but it would be cool
							if you did since I am curious who all is dropping
							by!
						</Typography>
						<Grid
							container
							className={classes.registerButtonContainer}>
							<Button
								variant='contained'
								size='medium'
								color='primary'
								onClick={handleSubmit}
								className={classes.registerButton}>
								Register
							</Button>
							<Button
								variant='contained'
								size='medium'
								color='secondary'
								onClick={clear}
								className={classes.registerButton}>
								Clear Form
							</Button>
						</Grid>
						<Typography
							align='right'
							className={classes.registerHelper}>
							If you already have an account, please{' '}
							<Link to='/login'>Log In</Link>.
						</Typography>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

Register.propTypes = {
	width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Register);
