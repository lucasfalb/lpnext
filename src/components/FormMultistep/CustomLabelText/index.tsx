import { useState, useEffect } from 'react';

type CustomLabelTextProps = {
  label: string,
  name: string,
  placeholder: string,
  value?: string,
  type: string,
  autocomplete: string,
  error?: string; 
  required?: boolean,
};

function IconError() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" className="rg-icon">
      <path fill="currentColor" d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1Zm0 9.063a4.062 4.062 0 1 1 0-8.125 4.062 4.062 0 0 1 0 8.124Zm0-6.87c-.358 0-.63.186-.63.489V6.45c0 .303.272.488.63.488s.63-.194.63-.488V3.682c0-.295-.28-.49-.63-.49Zm0 4.37A.624.624 0 1 0 6 8.81a.624.624 0 0 0 0-1.248Z"/>
    </svg>
  );
}

export default function CustomLabelText({ label, type, placeholder, error,autocomplete,name }: CustomLabelTextProps) {
  const [inputId, setInputId] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    setInputId(generateUniqueId());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputClass = `p-5 rounded cursor-pointer border ${
    error ? 'border-red-500' : 'border-solid border-[#BDBDBD]'
  } ${isFocused || inputValue || error ? 'bg-white' : 'bg-whiteSmoke'} placeholder-[#BDBDBD] text-sm  font-semibold hover:bg-[#FFF]`;

  return (
    <label className="flex flex-col gap-2 text-sm text-gray leading-none" htmlFor={inputId}>
      {label}
      <input
        autoComplete={autocomplete}
        className={inputClass}
        name={name}
        type={type}
        id={inputId}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
         {error && (
        <span className="text-red-500 text-sm mt-1 flex items-start gap-1">
          <IconError />{error}
        </span>
      )}
    </label>
  );
}
const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);
