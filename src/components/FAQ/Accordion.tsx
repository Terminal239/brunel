import { faq } from "../../../data.json";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div className="relative z-10 flex flex-1 flex-col gap-9">
      {faq.map((item, index) => (
        <AccordionItem key={index} index={index} item={item} />
      ))}
    </div>
  );
};

export default Accordion;
