import "./modal.css"
import React from "react";


const ModalD = ( { setIsOpen, children }) => {
    const closeModal = e => {
        if (e.target.classList.contains('overlay')) {
            console.log(setIsOpen)
            setIsOpen(false)
        }
    }
    
        return (
           
            <div className='modal'>
                <div className='overlay' onClick={closeModal}>{children}</div>
            </div>
        )
    }
    export default ModalD;