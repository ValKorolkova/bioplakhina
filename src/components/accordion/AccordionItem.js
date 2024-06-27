import { useState } from "react";
import arrowDown from "./Arrow_down.png"

export const AccordionItem = ({ title, content, isInitialOpen = false }) => {
    const [active, setActive] = useState(isInitialOpen);
    const handleActive = () => {
        setActive(!active)
    }
    return (
        <div>
            <div className={active ? 'accordion-header lora-regular active' : 'accordion-header lora-regular default'} onClick={handleActive}>
                <span>{title}</span>
                <img className={active ? 'arrowDown rotate' : 'arrowDown'} src={arrowDown} alt="arrow-icon"/>
            </div>
            {
                active && <div className="accordion-content lora-regular">{content}</div>
            }
        </div>
    )
}