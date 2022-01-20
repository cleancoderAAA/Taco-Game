import React from "react";
import "./Pantry.css";
import HyperLink from "../../components/HyperLink/HyperLink";
import WrappedButton from "../WrappedButton/WrappedButton";
import metamaskImg from "../../assets/imgs/metamask.45038d58.svg" ;

const Earned = () => {
    
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

    const stakeStyle = {
        border: "none",
        padding: "12px",
        backgroundColor: "rgb(90, 64, 62)",
        borderRadius: "8px",
        outline: "none",
        justifyContent: "center",
        flex:"1 1 0%"
    }

    const unstakeStyle = stakeStyle;

    return (
        <div className="vault">
            <span className="fw-b fs-20 ta-c">Vault (🍪,🍪)</span>
            <div className="col mt-12 mb-12 space">
                <div className="row mt-2" style={{lineHeight:"1.2"}}>
                    <span className="fw-5">Total Vault Balance:</span>
                    <div className="space"></div>
                    <span>🍪 -</span>
                </div>
                <div className="row mt-2" style={{lineHeight:"1.2"}}>
                    <span className="fw-5">Staked Balance:</span>
                    <div className="space"></div>
                    <span>🍪 -</span>
                </div>
                <div className="row mt-2" style={{lineHeight:"1.2"}}>
                    <span className="fw-5">% of Vault:</span>
                    <div className="space"></div>
                    <span>-</span>
                </div>
                <div className="row mt-2" style={{lineHeight:"1.2"}}>
                    <span className="fw-5">Pending Balance:</span>
                    <div className="space"></div>
                    <span>-</span>
                </div>
                <div className="row mt-2" style={{lineHeight:"1.2"}}>
                    <span className="fw-5">Withdrawble In:</span>
                    <div className="space"></div>
                    <span>-</span>
                </div>
            </div>
            <div className="col" style={{marginTop:"12px"}}>
                <HyperLink
                    to=""
                    target="_blank"
                    buttonStyle={metamaskButtonStyle}
                    imgURL={metamaskImg}
                    imgStyle={metamaskImgStyle}
                    text="Install Metamask →"
                />
               
            </div>
            <div className="row" style={{marginTop:"12px"}}>
               
                <WrappedButton
                    buttonStyle={stakeStyle}
                    textStyle={{color:"white",fontWeight:"bold"}}
                    text="Withdraw"
                />
                <div style={{width:"12px"}}></div>
                <WrappedButton
                    buttonStyle={unstakeStyle}
                    textStyle={{color:"white",fontWeight:"bold"}}
                    text="Withdraw"
                />
            </div>

        </div>
    )
}

export default Earned;
