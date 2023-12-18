import React from "react";

const InputField = ({
  title,
  name,
  type = "text",
  read = false,
  value,
  placeholder,
  handleClick,
  handleChange,
  style,
}) => {
  return (
    <>
      <label htmlFor={name} className="w-full text-sm sm:text-base font-bold">
        {title}
      </label>
      <input
        onClick={handleClick}
        type={type}
        name={name}
        readOnly={read}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${style} placeholder:font-bold pl-5 mt-2 p-2 border text-[#606879] text-xs sm:text-sm rounded-lg border-[#2fa0cd] focus:ring-2 focus:ring-[#2fa0cd] transition-all duration-300 ease-in-out`}
      />
    </>
  );
};

export default InputField;
