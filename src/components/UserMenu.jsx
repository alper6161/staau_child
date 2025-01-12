import React, { useState } from "react";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";

const UserMenu = ({user}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleAvatarClick} size="small">
                <Avatar alt={user?.name || 'Suat'} src="/path-to-user-image.jpg" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={() => console.log("Profile Clicked")}>Profil</MenuItem>
                <MenuItem onClick={() => console.log("Settings Clicked")}>Ayarlar</MenuItem>
                <MenuItem onClick={() => console.log("Logout Clicked")}>Çıkış Yap</MenuItem>
            </Menu>
        </div>
    );
};

export default UserMenu;
