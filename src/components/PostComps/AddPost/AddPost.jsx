import React from 'react';
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

const AddPost = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.addPostContainer}>
			<Typography
				variant='h3'
				align='center'
				className={classes.addPostHeader}>
				Add A Post!
			</Typography>
			<form style={{ width: '100%' }}>
				<Grid container className={classes.addPostForm}>
					<TextField
						label='Type your message here...'
						multiline
						rows={4}
						fullWidth
						variant='outlined'
						helperText='Maximum of 255 characters!'
					/>
					<Grid item className={classes.addPostButtonRow}>
						<FormControl
							variant='outlined'
							margin='dense'
							style={{ minWidth: '180px' }}
							className={classes.addPostFormControl}>
							<InputLabel id='distribution'>
								Distribution
							</InputLabel>
							<Select
								labelId='distribution'
								id='select-distribution'
								label='Distribution'>
								<MenuItem>Storewide</MenuItem>
								<MenuItem>Department One</MenuItem>
								<MenuItem>Department Two</MenuItem>
								<MenuItem>Department Three</MenuItem>
								<MenuItem>Department Four</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							variant='outlined'
							margin='dense'
							style={{ minWidth: '150px' }}
							className={classes.addPostFormControl}>
							<InputLabel id='priority'>Priority</InputLabel>
							<Select
								labelId='priority'
								id='select-priority'
								label='Priority'>
								<MenuItem>Normal</MenuItem>
								<MenuItem>Sticky</MenuItem>
							</Select>
						</FormControl>
						<Button
							variant='outlined'
							color='primary'
							size='large'
							className={classes.addPostFormControl}>
							Submit Post
						</Button>
					</Grid>
				</Grid>
			</form>
		</Grid>
	);
};

export default AddPost;
