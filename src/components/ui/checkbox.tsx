import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, disabled, ...props }) => {
  return (
    <label className={`flex items-center space-x-2 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
        disabled={disabled}
        {...props}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  )
}