import React from "react";

const InputField = ({
  title,
  name,
  type = "text",
  read = false,
  placeholder,
  style,
}) => {
  return (
    <>
      <label htmlFor={name} className="w-full text-sm sm:text-base font-bold">
        {title}
      </label>
      <input
        type={type}
        name={name}
        readOnly={read}
        placeholder={placeholder}
        className={`${style} placeholder:font-bold pl-5 mt-2 p-2 border text-[#606879] text-xs sm:text-sm rounded-lg border-[#2fa0cd] focus:ring-2 focus:ring-[#2fa0cd] transition-all duration-300 ease-in-out`}
      />
    </>
  );
};

export default InputField;
