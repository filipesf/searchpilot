import React, { useId, useState } from 'react';
import Field from './Field';

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  label: string;
  options: Option[];
  currentValue?: string;
  onChange: (selectedValue: string) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  currentValue,
  onChange,
}) => {
  const id = useId();
  const selectId = `select-${id}`;
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as string;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <Field id={selectId} label={label}>
      <select
        className='field__select'
        id={selectId}
        value={currentValue || selectedOption}
        onChange={handleSelectChange}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  );
};

export default Select;
