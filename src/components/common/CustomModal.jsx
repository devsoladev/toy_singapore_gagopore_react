import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function CustomModal({ handleModalOpen, isModalOpen }) {
	return (
		<div hidden={!isModalOpen}>
			<Button variant='outlined' onClick={handleModalOpen}>
				Open form dialog
			</Button>
			<Dialog open={isModalOpen} onClose={() => handleModalOpen(false)}>
				<DialogTitle>ADD NEW ITEM</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You can add new singapore travel contents!
					</DialogContentText>
					<Box sx={{ width: 300, maxWidth: '100%' }}>
						<TextField
							fullWidth
							placeholder='Please enter title'
							label='Title'
							id='filled-hidden-label-normal'
							defaultValue=''
							variant='standard'
						/>
					</Box>
					<Box sx={{ width: 300, maxWidth: '100%' }}>
						<TextField
							fullWidth
							placeholder='Please enter description'
							label='Description'
							id='filled-hidden-label-normal'
							defaultValue=''
							variant='standard'
						/>
					</Box>
					<Box sx={{ width: 300, maxWidth: '100%' }}>
						<TextField
							fullWidth
							placeholder='Please enter image url'
							label='Image'
							id='filled-hidden-label-normal'
							defaultValue=''
							variant='standard'
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleModalOpen(false)}>CANCEL</Button>
					<Button onClick={() => handleModalOpen(false)}>SAVE</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CustomModal;
