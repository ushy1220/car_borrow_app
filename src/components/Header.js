import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar w/ text</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
            </nav>
    )
}

export default Header;

/*
                
*/