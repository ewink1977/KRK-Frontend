import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Typography,
	TextField,
	Grid,
	FormControl,
	InputLabel,
	Button,
	Select,
	MenuItem,
} from '@material-ui/core';
import { useStyles } from './AddPost.Styles';
import { createPost } from '../../../actions/posts';

const AddPost = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.auth.user);

	const [postData, setPostData] = useState({
		content: '',
		distribution: currentUser.userProfile.department,
		priority: 1,
		author: currentUser.id,
	});

	const classes = useStyles();

	const clear = () => {
		setPostData({
			content: '',
			distribution: currentUser.userProfile.department,
			priority: '',
			author: currentUser.id,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(postData));
		clear();
	};

	return (
		<Grid container className={classes.addPostContainer}>
			<Typography
				variant='h3'
				align='center'
				className={classes.addPostHeader}>
				Add A Post!
			</Typography>
			<form style={{ width: '100%' }} onSubmit={handleSubmit}>
				<Grid container className={classes.addPostForm}>
					<TextField
						label='Type your message here...'
						multiline
						rows={4}
						fullWidth
						variant='outlined'
						helperText='Maximum of 255 characters!'
						value={postData.content}
						onChange={(e) =>
							setPostData({
								...postData,
								content: e.target.value,
							})
						}
					/>
					<Grid item className={classes.addPostButtonRow}>
						{currentUser.userProfile.access_level >= 2 ? (
							<FormControl
								variant='outlined'
								margin='dense'
								style={{ minWidth: '150px' }}
								className={classes.addPostFormControl}>
								<InputLabel id='distribution'>
									Distribution
								</InputLabel>
								<Select
									labelId='distribution'
									id='select-distribution'
									label='Distribution'
									value={postData.distribution}
									onChange={(e) =>
										setPostData({
											...postData,
											distribution: e.target.value,
										})
									}>
									<MenuItem value={9}>Storewide</MenuItem>
									<MenuItem value={1}>
										Department One
									</MenuItem>
									<MenuItem value={2}>
										Department Two
									</MenuItem>
									<MenuItem value={3}>
										Department Three
									</MenuItem>
									<MenuItem value={4}>
										Department Four
									</MenuItem>
								</Select>
							</FormControl>
						) : (
							<Fragment />
						)}
						{currentUser.userProfile.access_level >= 2 ? (
							<FormControl
								variant='outlined'
								margin='dense'
								style={{ minWidth: '150px' }}
								className={classes.addPostFormControl}>
								<InputLabel id='priority'>Priority</InputLabel>
								<Select
									labelId='priority'
									id='select-priority'
									label='Priority'
									value={postData.priority}
									onChange={(e) =>
										setPostData({
											...postData,
											priority: e.target.value,
										})
									}>
									<MenuItem value={1}>Normal</MenuItem>
									<MenuItem value={2}>Sticky</MenuItem>
								</Select>
							</FormControl>
						) : (
							<Fragment />
						)}
						<Button
							variant='contained'
							color='primary'
							size='small'
							className={classes.addPostFormControl}
							type='submit'>
							Submit Post
						</Button>
						<Button
							variant='contained'
							color='secondary'
							size='small'
							className={classes.addPostFormControl}
							onClick={clear}>
							Clear
						</Button>
					</Grid>
				</Grid>
			</form>
		</Grid>
	);
};

export default AddPost;
