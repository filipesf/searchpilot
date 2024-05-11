import React, { useId } from 'react';
import Field from './Field';

interface InputTextProps {
  required?: boolean;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
}

const InputText: React.FC<InputTextProps> = ({
  required = false,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const id = useId();
  const inputTextId = `select-${id}`;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Field id={inputTextId} label={label}>
      <input
        className='field__text'
        required={required}
        id={inputTextId}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </Field>
  );
};

export default InputText;
