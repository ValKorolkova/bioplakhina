import "./modal.css";
import React from "react";
import diploma from "./Diploma.jpg"


const ModalDContent = ({ setModalIsOpen }) => {
    return( <div className="modal_contentD">
        <img className="img-modal" src={diploma} alt="MGU Diploma"/>
        <p className="modal-text lora-regular">МГУ им. М.В. Ломоносова (2014 год)
        Биологический факультет, кафедра зоологии позвоночных.</p>
        <button className="btn-modal" onClick={() => setModalIsOpen(false)}>Закрыть</button>
    </div>)
}
export default ModalDContent;