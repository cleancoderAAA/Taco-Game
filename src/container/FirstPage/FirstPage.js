import React from "react";
import Header from "../../components/Header/Header";
import "./FirstPage.css" ;
import baker1 from "../../assets/imgs/baker1.5da205d5.png" ;
import baker2 from "../../assets/imgs/baker2.d59e4056.png" ;
import baker3 from "../../assets/imgs/baker3.1f77c7d9.png" ;
import twiter from "../../assets/imgs/twitter.8097ca9d.svg" ;
import discord from "../../assets/imgs/discord.9a823ca6.svg" ;
import HyperLink from "../../components/HyperLink/HyperLink";
import metamaskImg from "../../assets/imgs/metamask.45038d58.svg" ;

const FirstPage = () => {

    
    const metamaskImgStyle = {
        width: "20px",
        marginRight: "8px",
        display:"none"
    }

    const enterButtonStyle = {
        border: "none",
        backgroundColor: "rgb(90, 64, 62)",
        boxShadow: "rgb(90 64 62) 0px 0px 12px",
        color: "white",
        textShadow: "rgb(255 255 255) 0px 0px 12px",
        padding: "16px",
        borderRadius: "8px",
        fontWeight: "bold",
        textDecoration: "none",
        whiteSpace: "nowrap",
        fontSize: "14px",
    }

    const whitepapperButtonStyle = {
        border: "none",
        backgroundColor: "rgb(0, 71, 171)",
        color: "white",
        padding: "16px",
        borderRadius: "8px",
        fontWeight: "bold",
        textDecoration: "none",
        whiteSpace: "nowrap",
        fontSize: "14px",
    }

    return (
        <div style={{background:"#efe2b2", paddingBottom:"40px"}}>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="heorPanles">
                        <div className="presalePane1">
                            <span className="pane-title">Buy Chefs</span>
                            <span className="pane-body">
                                Welcome to Taco Game. Our chefs are excited to meet you! Staking starts on 12/19 at 22:00 UTC or when all Chefs are minted.
                            </span>
                            <div className="img-list">
                                <img src={baker1} alt="Baker1" />
                                <img src={baker2} alt="Baker2" />
                                <img src={baker3} alt="Baker3" />
                            </div>
                            <div className="description">
                                <div className="row pl-1 pr-1">
                                    <span className="quantity">Quantity</span>
                                    <div className="space"></div>
                                    <button className="btn btn-max">MAX (30)</button>
                                </div>
                                <input type="text" className="input-max" placeholder="Max 30 at a time"></input>
                                <div className="row pl-1 pr-1" style={{marginTop:"12px"}}>
                                    <span className="total">Total</span>
                                    <div className="space"></div>
                                    <span className="fs-12">--</span>
                                </div>
                                <span className="mt-1 mb-1 pl-1 pr-1 fs-12 fw-5" style={{color:"rgb(153, 153,153)"}}>
                                    Chefs are utility NFTs solely intended for playing Taco Game that carry no expectation of profit and have no guaranteed resale value. By buying you agree to the 
                                    <a href="/" className="anchor fw-6" style={{color:"rgb(85, 85, 85)", whiteSpace:"nowrap"}}> Terms of Service</a>
                                </span>
                                <a href="https://metamask.io" target="_blank" className="btn mt-2 btn-metamask" rel="noreferrer">
                                    <img src={metamaskImg} className="img-metamask" style={{width:"24px"}} alt="Metamask"/>
                                    <span className="fb fs-16">Install Metamask →</span>
                                </a>
                            </div>
                            <div className="detail">
                                <span className="fw-b fs-12">Details</span>
                                <ul className="detail-list">
                                    <li>🍪 Fair sale (first come, first serve)</li>
                                    <li>🍪 Total Supply: 10,000 Chefs</li>
                                    <li>🍪 Price: 1.5 AVAX</li>
                                    {/* <li>🍪 95% chance to mint a Chef</li>
                                    <li>🍪 5% chance to mint a Robot Chef</li> */}
                                </ul>
                            </div>
                        </div>
                        <div style={{width:"64px", flexShrink:"0"}}></div>
                        <div className="introPane1">
                            <div className="row" style={{justifyContent:"initial"}}>
                                <div className="avalanche">
                                    <span className="mr-1" style={{fontSize:"20px"}}>🔺</span>
                                    <span style={{opacity:"0.87"}}>Powered by Avalanche!</span>
                                </div>
                            </div>
                            <h2 className="introHeader">🍪 Build your taco empire</h2>
                            <span className="introDescription">Taco Game is an on-chain competitive idle game with a single purpose: to bake more tacos. Craft your perfect strategy and rise to the top of taco fame.</span>
                            <div className="heroButton">
                                <div className="row">
                                    <HyperLink
                                        to="/app"
                                        imgURL={metamaskImg}
                                        imgStyle={metamaskImgStyle}
                                        buttonStyle={enterButtonStyle}
                                        text="Enter the Taco Game 🍪"
                                    />
                                    <div style={{width:"12px"}}></div>
                                    <HyperLink
                                        to="/app"
                                        imgURL={metamaskImg}
                                        imgStyle={metamaskImgStyle}
                                        buttonStyle={whitepapperButtonStyle}
                                        text="Read the Whitepaper →"
                                    />
                                </div>
                                <div className="ml-2">
                                    <a href="https://twitter.com/tacogamenft" target="_blank" rel="noreferrer"> 
                                        <img src={twiter} className="icon-img" alt="Twitter" />
                                    </a>
                                    <a href="https://discord.gg/hPGTmwqkvN" target="_blank" rel="noreferrer">
                                    <img src={discord} className="icon-img" alt="Discord" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;