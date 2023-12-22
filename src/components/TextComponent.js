import React from "react";

const TextComponent = ({ style, title, name, value, handleChange }) => {
  return (
    <>
      <label htmlFor="" className="w-full text-base font-bold">
        {title}
      </label>
      <textarea
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        cols="30"
        rows="3"
        className={`${style} border mt-3 border-[#2fa0cd] focus:ring-2 focus:ring-[#2fa0cd]  px-4 py-3 w-[100%] outline-none rounded-xl text-sm text-[#474d59] placeholder:text-[#606879] transition-all duration-300 ease-in-out resize-none`}
      ></textarea>
    </>
  );
};

export default TextComponent;
