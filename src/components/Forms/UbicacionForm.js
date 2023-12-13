import React from "react";
import InputField from "../InputField";
import TextComponent from "../TextComponent";

const UbicacionForm = () => {
  return (
    <div className="px-2 sm:px-10">
      <h2 className="my-5 text-base sm:text-xl font-bold uppercase text-[#606879]">
        Detalles Geogr&aacute;ficos
      </h2>
      <form>
        <InputField
          title="Ubigeo"
          name="ubigeo"
          read={true}
          placeholder="Has click para agregar ubigeo"
          style="w-full cursor-pointer"
        />
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%]">
            <div className="flex-row">
              <InputField title="Dirección" name="direccion" style="w-full" />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Altitud"
              name="altitud"
              placeholder="1000 mmsn"
              type="number"
              style="w-full"
            />
          </div>
        </div>
        <div className="mt-5">
          <TextComponent title="Referencia" name="referencia" />
        </div>
        <div className="flex justify-center mt-10">
          <button className="w-full sm:w-[50%] bg-[#ff5151] p-2 rounded-lg text-[#ffffff] font-bold hover:opacity-70 transition-all duration-300 ease-in-out">
            Guardar Datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default UbicacionForm;
