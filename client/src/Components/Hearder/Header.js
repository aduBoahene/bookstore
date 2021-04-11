import React from 'react';
import bookstorelogo from '../../rabbit.PNG';
import './Header.css';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';


import {
    Link
  } from "react-router-dom";



export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header">
            <div className="header__innerContainer">
                <Link to="/">
                    <img src={bookstorelogo} className="header__appLogo"/>
                </Link>

                <div className="header__menu">
                   <span className="header__menuItem">
                       Home
                   </span>
                   <span className="header__menuItem">
                       Contact
                   </span>

                   <span className="header__menuItem">
                   <Badge color="secondary"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                      <LocalMallOutlinedIcon/>
                    </Badge>
                   </span>

                   <span className="header__menuItem header__registerButton">
                         <Link to="/register" className="header__Link">Register</Link>
                   </span>

                   <span className="">
                   <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <div className="header__profile">
                            <Avatar alt="Okete Lion" src="https://bit.ly/3mhC62X" />
                            <ArrowDropDownIcon/>
                        </div>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <Link to="/dashboard" className="header__Link"><MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                  </span>
                   
                </div>

                
            </div>
        </div>
    )
}
