import React from "react";
import  "./Header.css";
import MetamaskButton from "../../components/Buttons/MetamaskButton";

const Header = () => (
    <header className="row" style={{padding:"32px 16px"}}>
        <div className="navbar">
            <a href="/" className="anchor">
                <span className="navbarLogo">🍪 TACO GAME</span>
            </a>
            <div className="space"></div>
            <div className="navbarNetworkAndWallet">
                <MetamaskButton />
            </div>
        </div>
    </header>
);

export default Header ;