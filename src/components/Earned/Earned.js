import React from "react";
import "./Earned.css";
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

    const withdrawStyle = {
        border: "none",
        padding: "12px",
        backgroundColor: "rgb(90, 64, 62)",
        borderRadius: "8px",
        outline: "none",
        justifyContent: "center",
    }

    return (
        <div className="earned">
            <span className="fw-b fs-20 ta-c">Earned Tacos</span>
            <div className="col" style={{margin:"12px 0px 12px"}}>
                <span className="tacoCounter">
                    🍪&nbsp;
                    <span style={{textShadow:"rgb(108, 154, 139) 0px 0px 12px"}}>-</span>
                </span>
                <span className="fw-5 fs-14 ta-c" style={{opacity:"0.54"}}>- tacos per minute</span>
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
                <WrappedButton
                    buttonStyle={withdrawStyle}
                    textStyle={{color:"white",fontWeight:"bold"}}
                    text="Withdraw"
                />
            </div>

        </div>
    )
}

export default Earned;
