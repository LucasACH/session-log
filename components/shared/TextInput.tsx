import React, { ChangeEvent } from "react";
import { classNames } from "../../helpers/classNames";

interface TextInputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder: string;
  borderRadius?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  name,
  type,
  autoComplete,
  onChange,
  required = true,
  placeholder,
  borderRadius,
}) => {
  return (
    <div>
      <label htmlFor="email-address" className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        onChange={onChange}
        required={required}
        className={classNames(
          borderRadius,
          "appearance-none relative block w-full px-3 py-2 border border-blueGray-800 dark:border-blueGray-700 dark:bg-blueGray-800 placeholder-gray-500 focus:outline-none focus:ring-teal-400 focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
