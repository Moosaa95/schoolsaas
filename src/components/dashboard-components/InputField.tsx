import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form"; // Import necessary types for form handling

interface InputFieldProps {
  label: string;                        // Label for the input field
  type?: string;                        // Type of the input (text, password, email, etc.)
  name: string;                         // Name of the input field for form control
  register: UseFormRegister<any>;       // React Hook Form's register function
  defaultValue?: string;                // Default value for the input field
  error?: FieldError;                   // Error object from React Hook Form
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;  // Additional input props
}

export default function InputField({
  label,
  type = "text",
  register,
  name,
  defaultValue = "",
  error,
  inputProps,
}: InputFieldProps) {
  return (
    <div className="flex flex-col w-full gap-2 md:w-1/4">
      {/* Input Label */}
      <label htmlFor={name} className="block text-sm font-medium text-gray-500">
        {label}
      </label>

      {/* Input Field */}
      <input
        id={name}
        type={type}
        defaultValue={defaultValue}
        {...register(name)} 
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        {...inputProps} 
      />

      {/* Error Message */}
      {error && (
        <span className="mt-1 text-sm text-red">{error.message}</span>
      )}
    </div>
  );
}
