import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomCard from './CustomCard';
import items from '../../data.json';

const CustomContainer = (props) => {
	return (
		<main>
			<Box
				sx={{
					bgcolor: 'background.paper',
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth='sm'>
					<Typography
						component='h1'
						variant='h2'
						align='center'
						color='text.primary'
						gutterBottom
					>
						Hello, Singapore
					</Typography>
					<Typography
						variant='h5'
						align='center'
						color='text.secondary'
						paragraph
					></Typography>
					<Stack
						sx={{ pt: 4 }}
						direction='row'
						spacing={2}
						justifyContent='center'
					>
						<Button variant='contained'>ADD MORE INFO</Button>
					</Stack>
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth='md'>
				<Grid container spacing={4}>
					{items.map((item) => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<CustomCard item={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</main>
	);
};

export default CustomContainer;
