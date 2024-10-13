import "./modal.css"
import React from "react";


const ModalD = ( { setModalIsOpen, children }) => {
    const closeModalD = e => {
        if (e.target.classList.contains('overlayD')) {
            console.log(setModalIsOpen)
            setModalIsOpen(false)
        }
    }
    
        return (
           
            <div className='modalD'>
                <div className='overlayD' onClick={closeModalD}>{children}</div>
            </div>
        )
    }
    export default ModalD;