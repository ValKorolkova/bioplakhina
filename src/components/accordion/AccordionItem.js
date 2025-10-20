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
                 <svg
    className={active ? 'arrowDown rotate' : 'arrowDown'}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <path d="M0 0h24v24H0Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21 7.5l-9 9 -9-9"
      />
    </g>
  </svg>
            </div>
            {
                active && <div className="accordion-content lora-regular">{content}</div>
            }
        </div>
    )
}