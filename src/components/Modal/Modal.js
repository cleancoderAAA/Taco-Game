import React from "react";
import ReactModal from "react-modal";
import "./Modal.css";


const Modal = (props) => {

    ReactModal.setAppElement('#root');

    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "8px",
            backgroundColor: "rgb(39,13,11)",
            padding:"18px 32px",
          },
          overlay: {
              background: "rgba(255, 255, 255, 0.1)",
          }
    }
    
    return (

        <ReactModal 
            isOpen={props.showModal}
            onRequestClose={props.closeModal}
            style={modalStyles}
        >   
            <div className="modal">
                <div className="modal-header">
                    <button className="close" onClick={props.closeModal}>
                        <span style={{color:"white",fontSize:"28px"}}>×</span>
                    </button>
                    <div className="modal-title">
                        {props.title}
                    </div>
                </div>
                <div className="modal-body">
                    <div style={{padding:"4px 35px", backgroundColor:"rgb(239, 226, 178)", borderRadius:"8px", textAlign:"center"}}>
                        <span style={{fontSize:"30px"}}>🍪&nbsp;</span>
                        <span style={{fontSize:"32px",fontWeight:"bold",color:"rgb(50,205,50)"}}>4,927,082</span>
                    </div>
                    <div style={{color:"rgb(255,255,235)",padding:"16px 0px", fontSize:"12px"}}>
                        Claiming tacos from the Kitchen incure a 20% tax, paid to the Vault.
                    </div>
                    <div className="row" style={{fontSize:"12px", lineHeight:"1.2", paddingBottom:"12px"}}>
                        <span style={{color:"rgb(239, 226, 178)"}}>Your Earned Tacos:</span>
                        <div className="space"></div>
                        <span style={{color:"rgb(255,255,255)"}}>🍪4,927,082</span>
                    </div>
                    <div className="row" style={{fontSize:"12px", lineHeight:"1.2",paddingBottom:"12px"}}>
                        <span style={{color:"rgb(239, 226, 178)"}}>Vault tax(-20%):</span>
                        <div className="space"></div>
                        <span style={{color:"rgb(255,255,255)"}}>🍪4,927,082</span>
                    </div>
                    
                    <div className="row" style={{marginBottom:"12px"}}>
                        <div style={{height:"3px", backgroundColor:"rgb(239, 226, 178)", flex:"1 1 0%"}}></div>
                        <div style={{height:"3px", backgroundColor:"rgb(239, 226, 178)", flex:"0 1 0%"}}></div>
                    </div>

                    <div className="row" style={{fontSize:"12px", lineHeight:"1.2",paddingBottom:"12px"}}>
                        <span style={{color:"rgb(239, 226, 178)"}}>You'll receive':</span>
                        <div className="space"></div>
                        <span style={{color:"rgb(255,255,255)"}}>🍪4,927,082</span>
                    </div>

                    <button style={{cursor:"pointer",padding:"12px",borderRadius:"8px", border:"none", backgroundColor:"rgb(199,199,199)"}}>
                        <span>Claim</span>
                    </button>

                    <div style={{marginTop:"12px",textAlign:"center"}}>
                        <span style={{color:"rgb(255,255,255)",padding:"12px 0px", fontSize:"12px"}}>
                            Your transaction is loading, but it may take up to a minute to estimate gas before the MetaMask popup appears
                        </span>
                    </div>
                </div>
                <div className="modal-footer">

                </div>
            </div>
        </ReactModal>
    )
}

export default Modal;