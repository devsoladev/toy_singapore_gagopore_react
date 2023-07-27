import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const ColorAppBar = styled(AppBar)(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
}));

const Header = () => {
	return (
		<ColorAppBar color='primary' position='relative'>
			<Toolbar>
				<Typography variant='h6' color='inherit' noWrap>
					Singapore Gagopore
				</Typography>
			</Toolbar>
		</ColorAppBar>
	);
};

export default Header;
