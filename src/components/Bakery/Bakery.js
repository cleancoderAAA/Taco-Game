import React from "react";
import "./Bakery.css"
import HyperLink from "../../components/HyperLink/HyperLink";
import WrappedButton from "../WrappedButton/WrappedButton";
import metamaskImg from "../../assets/imgs/metamask.45038d58.svg" ;

const Bakery = () => {

    const ITEMS = [
        {title: "Staked", buttonText: "Unstake"},
        {title: "Not Staked", buttonText: "Stake"},
        {title: "In Cooldown", buttonText: "Withdraw"},
    ];

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

    const switchnetworkButtonStyle = {
        backgroundColor: "rgb(232, 65, 66)",
        border: "none",
        borderRadius: "8px",
        color: "white",
        fontWeight: "bold",
        boxShadow: "rgb(232 65 66) 0px 0px 12px",
        textShadow: "rgb(255 255 255) 0px 0px 12px",
    }

    return (
        <div className="bakery">
            <span className="ta-c fw-b fs-20">Kitchen</span>
                {ITEMS.map((item) => (
                    <div key={item.title}>
                        <div className="bakery-title">
                            <span className="fw-b fs-20" style={{display:"block"}}>{item.title}</span>
                            <div className="space"></div>
                            <label className="label-bakery">
                                <input type="checkbox" />
                                <span className="fs-12">Select all</span>
                            </label>
                            <button disabled className="btn-bakery">{item.buttonText}</button>
                        </div>
                        <div className="bakery-body">
                            <div className="row space ai-c" style={{padding:"0px 12px 0px 12px"}}>
                                <HyperLink
                                    to=""
                                    target="_blank"
                                    buttonStyle={metamaskButtonStyle}
                                    imgURL={metamaskImg}
                                    imgStyle={metamaskImgStyle}
                                    text="Install Metamask →"
                                />
                                <WrappedButton 
                                    buttonStyle={switchnetworkButtonStyle}
                                    textStyle={{fontWeight:"bold", color:"white", padding:"12px"}}
                                    text="Switch Network 🔺"
                                />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
};

export default Bakery;