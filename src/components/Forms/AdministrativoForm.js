import React from "react";
import InputField from "../InputField";
import TextComponent from "../TextComponent";

const AdministrativoForm = () => {
  return (
    <div className="px-2 sm:px-10">
      <h2 className="my-5 text-base sm:text-xl font-bold uppercase text-[#606879]">
        Detalles Administrativos
      </h2>
      <form>
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%]">
            <div className="flex-row">
              <InputField
                title="Gerente del Proyecto"
                name="gerente"
                read={true}
                placeholder="Has click para agregar gerente"
                style="w-full cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Ingeniero Residente"
              name="residente"
              read={true}
              placeholder="Has click para agregar residente"
              style="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%]">
            <div className="flex-row">
              <InputField
                title="Jefe de Oficina Técnica"
                name="jefe"
                read={true}
                placeholder="Has click para agregar jefe"
                style="w-full cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Administrador"
              name="administrador"
              read={true}
              placeholder="Has click para agregar administrador"
              style="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%]">
            <div className="flex-row">
              <InputField
                title="Operador Sisme"
                name="operador"
                read={true}
                placeholder="Has click para agregar operador"
                style="w-full cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Ingeniero Mecanico"
              name="mecanico"
              read={true}
              placeholder="Has click para agregar mecanico"
              style="w-full cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-5">
          <InputField
            title="Teléfono"
            name="telefono"
            type="number"
            style="w-full"
          />
        </div>
        <div className="mt-5">
          <TextComponent title="Comentarios" name="comentario" />
        </div>
        <div className="flex justify-center mt-10 mb-20">
          <button className="w-full sm:w-[50%] bg-[#ff5151] p-2 rounded-lg text-[#ffffff] font-bold hover:opacity-70 transition-all duration-300 ease-in-out">
            Guardar Datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdministrativoForm;
