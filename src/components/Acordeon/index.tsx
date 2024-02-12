'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import FAQSvg from '../../../public/faq-svg.svg';

type AccordionItemProps = {
  title: string;
  color?: string;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between cursor-pointer items-baseline gap-2`}
      >
        <h3 className={`text-lg font-semibold ${color ? `${color}` : 'text-darkBlueCp'} md:text-2xl`}>{title}</h3>
        <span className="min-w-6" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
          <Image src={FAQSvg} width={24} height={24} alt='Carplus' />
        </span>
      </div>
      {isOpen && (
        <p className='text-base text-gray font-semibold mt-2'>{children}</p>
      )}
    </div>
  );
};

export default AccordionItem;
