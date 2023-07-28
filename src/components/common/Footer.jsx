import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
	return (
		<Typography variant='h6' color='text.secondary' align='center'>
			{'Copyright © '}
			<Link
				color='inherit'
				href='https://github.com/devsoladev/toy_singapore_gagopore_react'
				target='_blank'
			>
				devsoladev
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const Footer = (props) => {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				p: 6,
			}}
			component='footer'
		>
			<Copyright />
		</Box>
	);
};

export default Footer;
