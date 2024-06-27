import {  useState } from "react";
import "./diploma.css"
import ModalContent from "../modal/ModalContent";
import ModalD from "../modal/ModalD";



function Diploma () {

    const [isOpen, setIsOpen] = useState(false);
   
  
    return(
        <div className="about-container">
            <div className="title-container">
                <h2 className="title-text cormorant-light">Образование</h2>
                <div className="line-title"></div>
            </div>
            <div className="diploma-mgu-container">
                <h2 className="lora-regular diploma-section-title">МГУ им. М.В. Ломоносова </h2>
                <p className="lora-regular mgu-description">биологический факультет, кафедра зоологии позвоночных</p>
            </div>
            <div >
                <h3 className="lora-regular diploma-title">Дипломная работа и курсовая</h3>
                <p className="lora-regular diploma-description">написаны в РАН (институт проблем эволюции и экологии им. А.Н. Северцова, кабинет методов молекулярной диагностики).</p>
            </div>
          
            <div className="open-modal-btn-container">
            <button className="open-modal-btn lora-regular" onClick={() => setIsOpen(true)}>Мой диплом</button>
            {isOpen &&
      <ModalD setIsOpen={setIsOpen}>
           <ModalContent setIsOpen={setIsOpen}/>
      </ModalD>
      }
            </div>
       
        </div>
    )
}
export default Diploma;