import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function CommonCard({ item }) {
	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia
				component='div'
				sx={{
					// 16:9
					pt: '56.25%',
				}}
				image={item.thumbnailPath}
			/>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant='h5' component='h2'>
					{item.title}
				</Typography>
				<Divider variant='light' />
				<Typography pt={2}>{item.description}</Typography>
			</CardContent>
		</Card>
	);
}

export default CommonCard;
