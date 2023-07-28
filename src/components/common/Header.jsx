import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const ColorAppBar = styled(AppBar)(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
}));

const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

const Header = () => {
	return (
		<ColorAppBar color='primary' position='relative'>
			<Toolbar>
				<StyledLink to='/'>
					<Typography variant='h6'>Singapore Gagopore</Typography>
				</StyledLink>
			</Toolbar>
		</ColorAppBar>
	);
};

export default Header;
