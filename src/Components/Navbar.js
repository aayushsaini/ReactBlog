import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <h1><Link to="/" className="logo">Stream</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Write blog</Link>
            </div>
        </div>
    );
}
 
export default NavBar
