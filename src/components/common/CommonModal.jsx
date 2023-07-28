import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function CommonModal({ handleAddItem, handleModalOpen, isModalOpen }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [thumbnailPath, setThumbnailPath] = useState('');

	const handleSubmit = () => {
		handleAddItem({ title, description, thumbnailPath });
		handleModalOpen(false);
	};

	return (
		<div hidden={!isModalOpen}>
			<Dialog open={isModalOpen} onClose={() => handleModalOpen(false)}>
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
					<Button onClick={() => handleModalOpen(false)}>CANCEL</Button>
					<Button onClick={handleSubmit}>SAVE</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CommonModal;
