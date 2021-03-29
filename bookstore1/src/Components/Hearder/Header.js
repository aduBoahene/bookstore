import React from 'react';
import bookstorelogo from '../../rabbit.PNG';
import './Header.css';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Badge from '@material-ui/core/Badge';



export default function Header() {
    return (
        <div className="header">
            <div className="header__innerContainer">
                <img src={bookstorelogo} />

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
                 
                         Register
                    
                   </span>
                   
                </div>

                
            </div>
        </div>
    )
}
