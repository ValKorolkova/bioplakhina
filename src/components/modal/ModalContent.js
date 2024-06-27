import "./modal.css";
import React from "react";


const ModalContent = ({ setIsOpen }) => {
    return( <div className="modal_content">
        <p>Modal content</p>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
    </div>)
}
export default ModalContent;