import React from "react";

const SelectedComponent = ({
  valueId = 1,
  data,
  titleOption,
  title,
  name,
  value,
  handleChange,
  status = false,
  classStyle,
}) => {
  return (
    <>
      <label htmlFor={name} className="w-full text-sm sm:text-base font-bold">
        {title}
      </label>
      <select
        name={name}
        id={name}
        disabled={status}
        value={value}
        onChange={handleChange}
        className={`${classStyle} mt-2 w-[100%] pl-5 p-2 border text-[#606879] text-xs sm:text-sm rounded-lg border-[#2fa0cd] focus:ring-2 focus:ring-[#2fa0cd] transition-all duration-300 ease-in-out outline-none cursor-pointer`}
      >
        <option value="" disabled selected>
          {titleOption}
        </option>
        {data &&
          data.map((itemData) => (
            <option key={itemData.id} value={valueId == 1 ? itemData.id : itemData.nombre}>
              {itemData.nombre}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectedComponent;
