import React from 'react';

interface CalculatorInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CalculatorInput = ({
  label,
  name,
  value,
  onChange,
  placeholder
}: CalculatorInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#DC9700] focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CalculatorInput;