import { useState, useEffect } from 'react';
type CustomCheckboxProps = {
  label: string,
  name: string,
}
const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
export default function CustomCheckbox({label,name}:CustomCheckboxProps){
  const [inputId, setInputId] = useState<string>('');
  useEffect(() => {
    setInputId(generateUniqueId());
  }, []);
  return (
    <label htmlFor={inputId}>
      <input type="checkbox" name={name} id={inputId}/>
      {label}
    </label>
  )
}
