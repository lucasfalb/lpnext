// components/Button.tsx

import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  text: ReactNode;
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBack({ text, onClick, className }: ButtonProps) {
  return (
    <button
      type='button'
      className={`${className ? className : ''} text-base font-bold cursor-pointer flex items-center gap-2 text-blue leading-none align-middle`}
      onClick={onClick}
    >
      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.70711 0.79289C8.09763 1.18342 8.09763 1.81658 7.70711 2.20711L2.4142 7.5L7.70711 12.7929C8.09763 13.1834 8.09763 13.8166 7.70711 14.2071C7.31658 14.5976 6.68342 14.5976 6.29289 14.2071L0.292899 8.2071C-0.0976003 7.8166 -0.0976003 7.1834 0.292899 6.7929L6.29289 0.79289C6.68342 0.40237 7.31658 0.40237 7.70711 0.79289Z" fill="#00226F"></path>
      </svg>
      {text}
    </button>
  );
}
