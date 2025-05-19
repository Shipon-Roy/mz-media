import React from "react";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

export default function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="bg-gray-800 rounded p-4 shadow my-5 ">
      <button
        onClick={onClick}
        className="w-full text-left font-bold flex justify-between items-center text-white "
      >
        <span>{title}</span>
        <span className="text-2xl">
          {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-400 transition duration-700 ease-in-out ">
          {content}
        </div>
      )}
    </div>
  );
}
