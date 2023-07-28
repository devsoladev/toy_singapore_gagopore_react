import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Layout from '../components/common/Layout';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
	'&:hover': {
		backgroundColor: red[700],
	},
}));

function MainPage() {
	const navigate = useNavigate();

	return (
		<Layout>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					bgcolor: 'background.paper',
					pt: 15,
				}}
			>
				<Container maxWidth='sm'>
					<Typography
						component='h1'
						variant='h3'
						align='center'
						color='text.primary'
						gutterBottom
					>
						🇸🇬 Hello, Singapore 🇸🇬
					</Typography>
					<Typography
						variant='h6'
						align='center'
						color='text.secondary'
						paragraph
					>
						Do you wanna have special vacation in this summer? <br /> Let's go
						to Singapore!
					</Typography>
					<Stack
						sx={{ pt: 10 }}
						direction='row'
						spacing={2}
						justifyContent='center'
					>
						<ColorButton variant='contained' onClick={() => navigate('/list')}>
							GO RIGHT NOW ✈️
						</ColorButton>
					</Stack>
				</Container>
			</Box>
		</Layout>
	);
}

export default MainPage;
