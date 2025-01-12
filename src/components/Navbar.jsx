import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{display: 'flex'}}>
            <ul style={{display: 'flex', flex: 1}}>
                <Link className="mr-1" to="/">Home</Link>
                <Link className="mr-1" to="/about">About</Link>
                <Link className="mr-1" to="/contact">Contact</Link>
            </ul>
        </nav>
    );
};

export default Navbar;