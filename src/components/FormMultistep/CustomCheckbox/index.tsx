import { useState, useEffect } from 'react';
type CustomCheckboxProps = {
  label: string,
  name: string,
  required?: boolean,
  error?: string,
}
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
const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
export default function CustomCheckbox({label,name,required = false, error}:CustomCheckboxProps){
  const [inputId, setInputId] = useState<string>('');
  useEffect(() => {
    setInputId(generateUniqueId());
  }, []);
  return (
    <div className='flex items-start gap-2 flex-wrap'>
    <label className={`flex items-start gap-2`} htmlFor={inputId}>
      <input
        className="mt-[2px] w-[14px] h-[14px]"
        type="checkbox"
        name={name}
        id={inputId}
        required={required}
      />
      <span className='text-sm text-gray text-justify whitespace-wrap' dangerouslySetInnerHTML={{ __html: label }} />
    </label>
    {error && (
        <span className="w-full text-red-500 text-sm mt-1 flex items-start gap-1 lg:w-fit whitespace-nowrap flex-1">
          <IconError /> {error}
        </span>
      )}
  </div>
  )
}