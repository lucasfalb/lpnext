import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import MultiStepIcon from '../../../../public/icon-form.svg';

interface CustomSelectProps {
  label: string;
  placeholder: string;
  options: string[];
  disabled?: boolean;
  classList?: string;
  onChange: (selectedOption: string) => void;
}

export default function CustomSelect({ label, placeholder, options, onChange, disabled,classList }: CustomSelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref para o container do dropdown

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: string) => {
    console.log(`CustomSelect ${label} foi alterado o valor para ${option}`);
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current || !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
  
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`${classList ? classList : ''} relative flex flex-col gap-2 ${disabled ? 'pointer-events-none opacity-50' : ''}`}>
      <label onClick={toggleDropdown} className="text-sm text-gray leading-none cursor-pointer">{label}</label>
      <div className="relative">
        <button
          title={selectedOption || placeholder}
          onClick={toggleDropdown}
          className={`${selectedOption ? 'bg-white' : 'bg-whiteSmoke'} border-lightGray border border-solid px-5 py-5 text-sm rounded w-full text-left flex items-center justify-between`}
          disabled={disabled}
        >
          {selectedOption || placeholder}
          <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
            <Image src={MultiStepIcon} width={14} height={14} alt={selectedOption || 'Carplus'} title={selectedOption || 'Carplus'} />
          </span>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md overflow-y-scroll max-h-72">
            {options.map((option, index) => (
              <span
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 cursor-pointer hover:bg-[#f3f3f3f3]"
              >
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
