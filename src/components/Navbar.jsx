import React from "react";
import {Autocomplete, TextField, IconButton, Button} from "@mui/material";
import { Home, Phone, Info } from "@mui/icons-material";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu.jsx";
import appIcon from "../assets/images/staau_icon.png";

const Navbar = () => {
    const options = ["Ali", "Veli", "Ayşe"];

    return (
        <div className="navbar">
            {/* Logo */}
            <div className="navbar-left">
                <img src={appIcon} alt="App Icon" className="navbar-logo" />
            </div>

            {/* Menu */}
            <div className="navbar-right">
                <Autocomplete
                    options={options}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Search..."
                            variant="outlined"
                            size="small"
                            className="navbar-search"
                        />
                    )}
                />
                <IconButton component={Link} to="/" className="navbar-button">
                    <Home />
                </IconButton>
                <IconButton component={Link} to="/about" className="navbar-button">
                    <Info />
                </IconButton>
                <IconButton component={Link} to="/contact" className="navbar-button">
                    <Phone />
                </IconButton>

                <UserMenu />
            </div>
        </div>
    );
};

export default Navbar;