import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function CommonModal({ handleAddItem, handleModalOpen, isModalOpen }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [thumbnailPath, setThumbnailPath] = useState('');

	const handleSubmit = () => {
		handleAddItem({ title, description, thumbnailPath });
		handleModalOpen(false);
	};

	const ColorButton = styled(Button)`
		color: ${(props) => props.customcolor};
	`;

	return (
		<div hidden={!isModalOpen}>
			<Dialog open={isModalOpen} onClose={() => handleModalOpen(false)}>
				<IconButton
					aria-label='close'
					onClick={() => handleModalOpen(false)}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogTitle>ADD NEW CONTENTS</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You can add new singapore travel contents.
					</DialogContentText>
					<Box sx={{ width: 300, maxWidth: '100%' }}>
						<TextField
							fullWidth
							placeholder='Please enter title'
							label='Title'
							id='filled-hidden-label-normal'
							value={title}
							variant='standard'
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Box>
					<Box sx={{ width: 300, maxWidth: '100%' }}>
						<TextField
							fullWidth
							placeholder='Please enter description'
							label='Description'
							id='filled-hidden-label-normal'
							value={description}
							variant='standard'
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Box>
					<Box sx={{ width: 300, maxWidth: '100%' }}>
						<TextField
							fullWidth
							placeholder='Please enter image url'
							label='Image'
							id='filled-hidden-label-normal'
							value={thumbnailPath}
							variant='standard'
							onChange={(e) => setThumbnailPath(e.target.value)}
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<ColorButton
						customcolor='grey'
						onClick={() => handleModalOpen(false)}
					>
						CANCEL
					</ColorButton>
					<ColorButton customcolor='red' onClick={handleSubmit}>
						SAVE
					</ColorButton>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CommonModal;
