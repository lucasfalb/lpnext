import Countries from '@/utils/CountriesMap';
import { useState, useEffect, useRef } from 'react';

type CustomLabelTextProps = {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  required?: boolean,
};
export default function CustomTel({
  label,
  placeholder,
  error,
  name,
  required = false
}: CustomLabelTextProps) {
  const [inputId, setInputId] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(170);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputId(generateUniqueId());
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleCountrySelect = (index: number) => {
    setSelectedCountryIndex(index);
    setShowDropdown(false);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  function IconError() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        fill="none"
        className="rg-icon"
      >
        <path
          fill="currentColor"
          d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1Zm0 9.063a4.062 4.062 0 1 1 0-8.125 4.062 4.062 0 0 1 0 8.124Zm0-6.87c-.358 0-.63.186-.63.489V6.45c0 .303.272.488.63.488s.63-.194.63-.488V3.682c0-.295-.28-.49-.63-.49Zm0 4.37A.624.624 0 1 0 6 8.81a.624.624 0 0 0 0-1.248Z"
        />
      </svg>
    );
  }
  const contentClass = `rounded text-[#000] cursor-pointer border ${error ? 'border-red-500 ' : 'border-solid border-gray'}`;
  return (
    <label className="flex flex-col gap-2 text-sm text-gray leading-none" htmlFor={inputId}>
      {label}
      <div className={`${contentClass} relative flex`} ref={dropdownRef}>
        <div onClick={handleDropdownToggle} className="p-[10px] bg-[#fbfbfb] flex items-center rounded">
          <span className='text-sm flex items-center gap-2'>
            <i
              className="bg-[url('/flags.png')] w-[16px] h-[11px] flex"
              style={{
                backgroundPositionX: `${Countries[selectedCountryIndex].positionX}`,
                backgroundPositionY: `${Countries[selectedCountryIndex].positionY}`
              }}
            ></i>
            {Countries[selectedCountryIndex].dialCode}
          </span>
        </div>
        <input
          name={name}
          type="tel"
          id={inputId}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${isFocused || inputValue ? 'bg-white' : 'bg-whiteSmoke'} placeholder-[#BDBDBD] w-full pt-5 pl-2 text-sm pr-5 pb-5 focus:outline-none hover:bg-[#FFF] cursor-pointer`}
        />
        <input className='hidden' name="country" defaultValue={Countries[selectedCountryIndex].country} type="text" />
        <input className='hidden' name="prefix" defaultValue={Countries[selectedCountryIndex].dialCode} type="text" />
        {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 overflow-y-auto max-h-72 z-10">
            <ul>
              {Countries.map((country, index) => (
                <li
                  key={index}
                  onClick={() => handleCountrySelect(index)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                >
                  <i
                    className="bg-[url('/flags.png')] w-[16px] h-[11px] flex items-start"
                    style={{
                      backgroundPositionX: `${country.positionX}`,
                      backgroundPositionY: `${country.positionY}`
                    }}
                  ></i>
                  {country.country}
                  <span className='text-sm ml-auto'>{country.dialCode}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error && (
        <span className="text-red-500 text-sm mt-1 flex items-start gap-1">
          <IconError /> {error}
        </span>
      )}
    </label>
  );
}

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};
