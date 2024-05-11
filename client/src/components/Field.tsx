import React from 'react';

interface FieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ id, label, children }) => {
  return (
    <div className='field'>
      <label className='field__label' htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};

export default Field;
