import { AccordionItem } from "./AccordionItem";
import { WorkList } from "./WorkList";
import "./accordion.css"

export const Accordion = () => {
    return(
        <div>
            {WorkList.map((item,index) =>
            <AccordionItem 
            key={item.id} 
            title={item.title} 
            content={item.content}
            isInitialOpen={index ===0} />)}
        </div>
    )
}