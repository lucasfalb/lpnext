import { useState, useEffect } from 'react';

type CustomLabelTextProps = {
  label: string,
  name: string,
  placeholder: string,
  type: string,
  autocomplete: string,
  error?: string; 
};

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
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </label>
  );
}

const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
