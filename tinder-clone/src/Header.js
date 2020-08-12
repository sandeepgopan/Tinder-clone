import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className= "header_icon" fontSize ="large"/>
            </IconButton>
            <img className="header_logo" src="tinder-logo.png" alt="tinder-logo"></img>
            <IconButton>
            <ForumIcon className= "header_icon" fontSize ="large"/>
            </IconButton>
        </div>
    )
}

export default Header
