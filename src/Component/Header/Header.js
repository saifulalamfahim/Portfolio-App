import React from 'react';
import NavBar from './../NavBar/NavBar';
import './Header.css'
import MainSec from './../MainSec/MainSec';


const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <MainSec></MainSec>
        </div>
    );
};

export default Header;