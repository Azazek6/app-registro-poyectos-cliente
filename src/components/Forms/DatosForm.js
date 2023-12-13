import { useState } from "react";
import InputField from "../InputField";
import CheckComponent from "../CheckComponent";

const DatosForm = () => {
  //Estados
  const [isChecked, setIsChecked] = useState(true);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="px-2 sm:px-10">
      <h2 className="my-5 text-base sm:text-xl font-bold uppercase text-[#606879]">
        Detalles del Proyecto
      </h2>
      <form>
        <div className="flex-row sm:flex items-center gap-5">
          <div className="w-full sm:w-[30%]">
            <div className="flex-row">
              <InputField
                title="N° de Proyecto"
                name="proyecto"
                style="w-full"
              />
            </div>
          </div>
          <div className="w-full sm:w-[70%] mt-5 sm:mt-0">
            <InputField title="Nombre" name="nombre" style="w-full" />
          </div>
        </div>
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%]">
            <div className="flex-row">
              <InputField
                title="Division"
                name="division"
                read={true}
                placeholder="Has click para agregar division"
                style="w-full cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Cliente"
              name="cliente"
              read={true}
              placeholder="Has click para agregar cliente"
              style="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <div className="flex-row">
              <InputField
                title="RUC"
                name="documento"
                read={true}
                style="w-full"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Contacto Cliente"
              name="contacto"
              style="w-full"
            />
          </div>
        </div>
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <div className="flex-row">
              <InputField
                title="Fecha Inicial"
                name="fecha_inicio"
                type="date"
                style="w-full"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Fecha Termino"
              name="fecha_termino"
              type="date"
              style="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center mt-1 sm:mt-10">
          <CheckComponent
            title="En Proceso"
            toogle={toggleCheckbox}
            activate={isChecked}
            classStyle="sm:w-[20%] sm:mt-0 mt-8"
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="w-full sm:w-[50%] mb-5 bg-[#ff5151] p-2 rounded-lg text-[#ffffff] font-bold hover:opacity-70 transition-all duration-300 ease-in-out">
            Guardar Datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default DatosForm;
