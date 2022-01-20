import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./SecondPage.css";
import Earned from "../../components/Earned/Earned";
import Pantry from "../../components/Pantry/Pantry";
import Bakery from "../../components/Bakery/Bakery";
import Shop from "../../components/Shop/Shop";
import mainImg from "../../assets/imgs/SnowfieldBackground.926af9d1.png";
import Modal from "../../components/Modal/Modal";


const SecondPage = () => {

    const contractStyle = {
        textDecoration:"underline", 
        color:"rgb(39, 13, 11)", 
        fontWeight:"bold"
    } ;

    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <div style={{background:"#d4f0f6"}}>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="bg-img">
                            <canvas className="bg-canvas" />
                            <div style={{padding:"20px 12px 12px",backgroundColor:"rgb(255,255,255)"}}>
                                <span style={{lineHeight:"1.5"}}>
                                    Welcome to the Grand Opening of Taco Game! Your taco empire starts here. 🍪
                                    <br/>
                                    <a href="/" className="fw-b anchor" style={{color:"rgb(50, 205, 50)"}}>Buy Chefs →</a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="/whitepaper.pdf" target="_blank" className="fw-b anchor" style={{color:"rgb(0, 71, 171)"}}>How to play →</a>
                                </span>
                            </div>
                            <img src={mainImg} className="img" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <Earned />
                        <div style={{width:"12px"}}></div>
                        <Pantry />
                    </div>
                    <Bakery />
                    <Shop />
                    <div className="mt-3 ta-c" style={{padding:"24px 16px", color:"rgb(rgb(39, 13, 11))"}}>
                        <span className="fw-5">
                            Happy holidays!
                            <span style={{fontFamily:"sans-serif"}}> ❤️</span>
                        </span>
                        <br/>
                        <br/>
                        <span>
                        <a href="https://taco.game/whitepaper.pdf" target="_blank" style={contractStyle} rel="noreferrer">Whitepaper</a>
                            ·
                            <a href="/tos" target="_blank" style={contractStyle} rel="noreferrer">Terms of Service</a>
                        </span>
                        <br/>
                        <span className="fs-12">
                            <br/>
                            Contracts:
                            <a href="https://testnet.bscscan.com/address/0x828F4EF06B8AB1785e77A21485Eaa81ad3DEFBA3" target="_blank" style={contractStyle} rel="noreferrer">Chef</a>
                            ·
                            <a href="https://testnet.bscscan.com/address/0x4BA6A8A9B5B463a1E8d79327CBd6A841e0BF00aE" target="_blank" style={contractStyle} rel="noreferrer">Kitchen</a>
                            ·
                            <a href="https://testnet.bscscan.com/address/0x10dd543E6DB525AB17Ee6D8D92B58fFc761fEC11" target="_blank" style={contractStyle} rel="noreferrer">Taco</a>
                            ·
                            <a href="https://testnet.bscscan.com/address/0xD0b4EB6511BB3a96e19A1c19A0Cf469B7cb1303F" target="_blank" sstyle={contractStyle} rel="noreferrer">Vault</a>
                            
                        </span>
                    </div>
                </div>
            </div>
            
            <button onClick={openModal}>Open Modal</button>
            <Modal 
                showModal={showModal}
                closeModal={closeModal}
                title="Claim Taco"
            />
    
        </div>
    )
}

export default SecondPage;