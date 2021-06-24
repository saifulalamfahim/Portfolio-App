import React, { useState } from 'react';
import './NavBar.css';


const NavBar = () => {
    const [height , setHeight] = useState("0%");
    const handleOpenClick = () => {
        setHeight("100%")
    }


    return (
       
            <div className="navbar">
                <div className="menu">
                    <h3 className="logo">F A H I M</h3>
                    <div className="hamburger-menu" onClick={handleOpenClick}>
                        <div className="bar">

                            <div style={{height:height}} className="menuContainer" id="navbar">
                                <span  className="clossbtn" >&times; </span> 
                                
                                <div className="menu-content">
                                    <a href="#">Home</a>
                                    <a href="#">Price</a>
                                    <a href="#">About</a>
                                    <a href="#">blog</a>
                                    <a href="#">team</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    );
};


export default NavBar;