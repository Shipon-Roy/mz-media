import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className=" rounded shadow w-full p-4 space-y-5">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
