import { useState, useEffect } from "react";
import SelectedComponent from "../SelectedComponent";
import InputField from "../InputField";
import TextComponent from "../TextComponent";
import { useGlobal } from "@/context/GlobalProvider";
import Distrito from "@/samples/distritos.json";
import Provincia from "@/samples/provincias.json";
import { toastMessage, orderElementForName } from "@/helpers/general";

const UbicacionForm = () => {
  const { crearUbicacion, proyecto, fetchProyectos } = useGlobal();
  const [ubicacionForm, setUbicacionForm] = useState({
    distrito: "",
    provincia: "",
    direccion: "",
    altitud: "",
    referencia: "",
    id_proyecto: "",
  });

  const clearData = () => {
    setUbicacionForm({
      distrito: "",
      provincia: "",
      direccion: "",
      altitud: "",
      referencia: "",
      id_proyecto: "",
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setUbicacionForm({ ...ubicacionForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status, data } = await crearUbicacion(ubicacionForm);

      if (status == 201) {
        toastMessage(data.message, 1);
        clearData();
      }
    } catch (error) {
      toastMessage(error.response.data.message, 3);
    }
  };

  useEffect(() => {
    fetchProyectos();
  }, []);

  return (
    <div className="px-2 sm:px-10">
      <h2 className="my-5 text-base sm:text-xl font-bold uppercase text-[#606879]">
        Detalles Geogr&aacute;ficos
      </h2>
      <form onSubmit={handleSubmit}>
        <SelectedComponent
          title="Proyecto"
          titleOption="Seleccionar"
          name="id_proyecto"
          data={proyecto}
          value={ubicacionForm.id_proyecto}
          handleChange={handleChange}
        />
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%]">
            <div className="flex-row">
              <SelectedComponent
                title="Distrito"
                titleOption="Seleccionar"
                data={orderElementForName(Distrito)}
                valueId={2}
                name="distrito"
                value={ubicacionForm.distrito}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <SelectedComponent
              title="Provincia"
              titleOption="Seleccionar"
              data={orderElementForName(Provincia)}
              valueId={2}
              name="provincia"
              value={ubicacionForm.provincia}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="flex-row sm:flex items-center gap-5 mt-5">
          <div className="w-full sm:w-[50%]">
            <div className="flex-row">
              <InputField
                title="Dirección"
                name="direccion"
                value={ubicacionForm.direccion}
                handleChange={handleChange}
                style="w-full"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
            <InputField
              title="Altitud"
              name="altitud"
              value={ubicacionForm.altitud}
              handleChange={handleChange}
              placeholder="1000 mmsn"
              type="number"
              style="w-full"
            />
          </div>
        </div>
        <div className="mt-5">
          <TextComponent
            title="Referencia"
            name="referencia"
            value={ubicacionForm.referencia}
            handleChange={handleChange}
          />
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
