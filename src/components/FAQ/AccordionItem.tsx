import { useState } from "react";

interface Props {
  index: number;
  item: FAQItem;
}

const AccordionItem: React.FC<Props> = ({ item, index }) => {
  const [expandElement, setExpandElement] = useState(false);
  const { question, answer } = item;

  return (
    <div className="w-full border-b border-accordion-item-border pb-6">
      <button className="flex w-full items-center justify-between gap-4 p-0 md:gap-16 xl:gap-36" onClick={() => setExpandElement((prev) => !prev)} aria-expanded={expandElement} aria-controls={"panel" + index}>
        <span className="text-left text-base font-semibold text-button md:text-[18px] lg:text-[20px]">{question}</span> <img src={expandElement ? "/assets/icons/minus-icon.svg" : "/assets/icons/plus-icon.svg"} alt="plus icon" />
      </button>
      {expandElement && (
        <div id={"panel" + index} className="mt-6" role="region">
          <p className="leading-[1.6]">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
