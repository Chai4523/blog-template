import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog Template</h1>
            <div className="links">
                <Link to="/blog-template">Home</Link>
                <Link to="/blog-template/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;