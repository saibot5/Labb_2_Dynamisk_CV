import React from "react";

function EliteModal({closeModal}) {
    
 
    return(
        <div className="elitePopup" id="popup4">
        <div className="elitePopup-inner">
            <p>välkommen till 1337 klubben!</p>
            <button className="eliteButton" onClick={() => closeModal(false)}>Stäng</button>
        </div>
    </div>
    )
}

export default EliteModal;

