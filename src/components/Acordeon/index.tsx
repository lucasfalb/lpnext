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
        <h3 className={`text-base font-semibold ${color ? `${color}` : 'text-darkBlueCp'} md:text-lg`}>{title}</h3>
        <span className="min-w-6" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
          <Image src={FAQSvg} width={15} height={15} alt='Carplus' />
        </span>
      </div>
      {isOpen && (
        <p className='text-base text-gray font-semibold mt-2'>{children}</p>
      )}
    </div>
  );
};

export default AccordionItem;
