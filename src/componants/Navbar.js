import { Link, useNavigation } from 'react-router-dom';
import './style.css';
import { Box } from '@mui/material';
import { Home } from '@mui/icons-material';
import About from '../screens/About';


function Navbar() {

    // let navigate = useNavigation();

    let route = () => {
        // navigate("home");
    }

    return (


        <Box className="main">
            <Box>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/contact'>Contct us</Link></li>
                </ul>
            </Box>
        </Box>
    )
}

export default Navbar;



