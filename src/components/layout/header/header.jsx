import React from "react";
import Logo from "../../ui/logo/logo.jsx";
import Nav from "../nav/nav.jsx";
import './style.css'

function Header () {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;