
import {Link} from 'react-router-dom'
import Active from '../component/activeLink/Active';
const Header = () => {
    return (
        <nav>
            <Active to="/">Home</Active>
            <Active to="/about">About</Active>
            <Active to="/friends">Friends</Active> 
            <Active to="/post">Post</Active> 
            <Active to="/contact">Contact</Active> 
        </nav>

    );
};

export default Header;