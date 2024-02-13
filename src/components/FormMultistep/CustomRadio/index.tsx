import { useState, useEffect } from 'react';

interface CustomRadioProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function CustomRadio({ value, label, checked, onChange }: CustomRadioProps) {
  const [inputId, setInputId] = useState<string>('');

  useEffect(() => {
    setInputId(generateUniqueId());
  }, []);

  const handleInputChange = () => {
    onChange(value);
  };

  return (
    <label className={`py-5 cursor-pointer px-6 flex align-middle leading-none text-base font-semibold items-center gap-1 border border-solid ${checked ? 'border-[#0053FF] text-blueLightCp' : 'border-[#CCD3E2] text-gray '} rounded`} htmlFor={inputId}>
      <input
        className={`accent-[#0053FF] mb-[4px] min-h-[14px] min-w-[14px]`}
        width={14}
        height={14}
        type="radio"
        id={inputId}
        name="dealer"
        value={value}
        checked={checked}
        onChange={handleInputChange}
      />
      {label}
    </label>
  );
}

const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
