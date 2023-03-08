import React from "react";
import Title from "./Title";
import "./Header.css";
function Header()
{
    return(
        <div className="Header">
        <Title/>
     <div className="nav-item">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sign In</li>
            <li>Login</li>
        </ul>
     </div>
     </div>
    );
}
export default Header;