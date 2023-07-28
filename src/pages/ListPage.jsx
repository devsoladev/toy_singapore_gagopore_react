import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Layout from '../components/common/Layout';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CommonCard from '../components/common/CommonCard';
import CommonModal from '../components/common/CommonModal';
import data from '../data.json';

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
	'&:hover': {
		backgroundColor: red[700],
	},
}));

function ListPage() {
	const [isModalOpen, setModalOpenStatus] = useState(false);
	const [items, setItems] = useState(data);

	const handleModalOpen = (value) => {
		setModalOpenStatus(value);
	};

	const handleAddItem = (item) => {
		setItems([item, ...items]);
	};

	return (
		<>
			<Layout>
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
							variant='h3'
							align='center'
							color='text.primary'
							gutterBottom
						>
							Let's go to Singapore !
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='text.secondary'
							paragraph
						>
							You can look for several contents about Singapore. <br />
							Also you can add a new contents.
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction='row'
							spacing={2}
							justifyContent='center'
						>
							<ColorButton
								variant='contained'
								onClick={() => handleModalOpen(true)}
							>
								ADD CONTENTS
							</ColorButton>
						</Stack>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth='md'>
					<Grid container spacing={4}>
						{items.map((item) => (
							<Grid item key={item.id} xs={12} sm={6} md={4}>
								<CommonCard item={item} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Layout>
			<CommonModal
				handleAddItem={handleAddItem}
				handleModalOpen={handleModalOpen}
				isModalOpen={isModalOpen}
			/>
		</>
	);
}

export default ListPage;
