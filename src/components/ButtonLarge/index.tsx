import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  color?: string;
  text: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonLarge({ color, text, onClick }: ButtonProps) {
  return (
    <button
      type='button'
      className='p-5 text-white text-base font-bold w-full rounded leading-5'
      style={{ backgroundColor: color}}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
