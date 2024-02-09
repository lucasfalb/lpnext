'use client'
import React, { useState } from 'react';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer opacity-${isOpen ? '100' : '50'} hover:opacity-100`}
      >
        <h3 className="text-sm text-white font-semibold">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'} `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
