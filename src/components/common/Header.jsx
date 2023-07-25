import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../images/sp_flag.png';

const Header = () => {
	return (
		<AppBar position='relative'>
			<Toolbar>
				<Typography variant='h6' color='inherit' noWrap>
					Singapore Gagopore
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
