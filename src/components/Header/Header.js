import React from "react";
import  "./Header.css";
import HyperLink from "../../components/HyperLink/HyperLink";
import WrappedButton from "../WrappedButton/WrappedButton";
import metamaskImg from "../../assets/imgs/metamask.45038d58.svg" ;

const Header = () => {
    
    const metamaskButtonStyle = {
        color: "white",
        padding: "12px 16px",
        borderRadius: "8px",
        alignItems: "center",
        textShadow: "rgb(255, 255,255) 0px 0px 12px",
        backgroundColor: "rgba(246, 133, 27, 0.933)",
        boxShadow: "rgb(246 144 27) 0px 0px 12px",
        fontWeight: "bold",
        justifyContent: "center",
    }

    const metamaskImgStyle = {
        width: "20px",
        marginRight: "8px"
    }

    const wrongButtonStyle = {
        boxSizing: "border-box",
        height: "41px",
        padding: "12px 16px",
        border: "1px solid rgb(232, 65, 66)",
        borderRadius: "8px",
        backgroundColor: "red",
        fontWeight: "500",
        color: "rgb(255, 255, 255)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        boxShadow: "rgb(232 65 66) 0px 0px 12px"
    }

    const iconStyle = {
        fontSize: "16px"
    }

    const wallletStyle = {
        borderRadius: "8px",
        color:"white",
        backgroundColor: "rgb(39, 13, 11)",
        padding: "12px 16px",
        fontWeight: "bold",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    } 

    const avalancheStyle = {
        boxSizing: "border-box",
        height: "41px",
        padding: "12px 16px",
        border: "1px solid rgb(232, 65, 66)",
        borderRadius: "8px",
        backgroundColor: "rgb(255, 255, 255)",
        fontWeight: "500",
        color: "rgb(0, 0, 0)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        boxShadow: "rgb(232 65 66) 0px 0px 12px",
    }

    return (
        <header className="row" style={{padding:"32px 16px"}}>
            <div className="navbar">
                <a href="/" className="anchor">
                    <span className="navbarLogo">🍪 TACO GAME</span>
                </a>
                <div className="space"></div>
                <div className="navbarNetworkAndWallet">
                    <HyperLink
                        to=""
                        target="_blank"
                        buttonStyle={metamaskButtonStyle}
                        imgURL={metamaskImg}
                        imgStyle={metamaskImgStyle}
                        text="Install Metamask →"
                    />
                    <WrappedButton 
                        buttonStyle={wrongButtonStyle}
                        iconStyle={iconStyle}
                        icon="⚠️&nbsp;"
                        text="Wrong Network"
                    />
                    <div style={{width:"12px"}}></div>
                    <div style={wallletStyle}>
                    0xb30b…8261
                    </div>

                    <div style={avalancheStyle}>
                        <span style={{fontSize:"16px"}}>🔺&nbsp;</span>
                        <span>Avalanche</span>
                    </div>
                    <div className="row" style={{backgroundColor:"rgb(90,64,62)",color:"white", borderRadius:"8px", overflow:"hidden"}}>
                        <div className="row fw-b" style={{padding:"12px 12px 12px 16px"}}>
                            <span>
                                🍪
                                <span style={{textShadow:"rgb(255,255,255) 0px 0px 12px"}}>0.0</span>
                            </span>
                        </div>
                        <div style={{width:"12px"}}></div>
                        <div style={wallletStyle}>
                        0xb30b…8261
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </header>
    )
}

export default Header ;