import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import MultiStepIcon from '../../../../public/icon-form.svg';

enum VehicleSegment {
  TODOS = 0,
  SEDAN = 13,
  SUV = 10,
  MONOVOLUME = 15,
  HATCHBACK = 11,
  COUPÉ = 12,
  COMERCIAL = 17,
  CITADINO = 16,
  CARRINHA = 14,
  CABRIO = 18,
}

interface CarFilterMobileProps {
  selectedSegment: number | undefined;
  setSelectedSegment: (value: number | undefined) => void;
}

export default function CarFilterMobile({ selectedSegment, setSelectedSegment }: CarFilterMobileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current || !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelect = (value: number) => {
    setSelectedSegment(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative flex flex-col gap-2 min-w-[300px]">
      <button
        onClick={toggleDropdown}
        className="bg-white border-lightGray text-center border border-solid px-5 py-3 text-base text-darkBlueCp font-bold rounded w-full flex items-center min-h-[64px]"
      >
        {selectedSegment !== undefined ? VehicleSegment[selectedSegment].replace('_', ' ') : ''}
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease',marginLeft:'auto', width:'14px'}}>
          <Image src={MultiStepIcon} width={14} height={14} alt={'Carplus'} title={'Carplus'} />
        </span>
      </button>
      {isOpen && (
        <div className="absolute top-[65px] z-10 mt-2 w-full bg-white shadow-2xl rounded-md overflow-y-auto max-h-72">
          {Object.entries(VehicleSegment).filter(([key, value]) => isNaN(Number(key)) && Number(value) !== selectedSegment).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleSelect(Number(value))}
              className="block px-4 py-2 w-full text-left cursor-pointer hover:bg-[#f3f3f3]"
            >
              {key.replace('_', ' ')}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
