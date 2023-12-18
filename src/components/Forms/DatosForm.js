import { useState, useRef } from "react";
import moment from "moment";
import InputField from "../InputField";
import SelectedComponent from "../SelectedComponent";
import CheckComponent from "../CheckComponent";
import ClientModal from "../Modal/ClientModal";
import { useGlobal } from "@/context/GlobalProvider";
import { toastMessage } from "@/helpers/general";

const listDivision = [
  {
    id: "INICIACIÓN",
    nombre: "INICIACIÓN",
  },
  {
    id: "PLANIFICACIÓN",
    nombre: "PLANIFICACIÓN",
  },
  {
    id: "EJECUCIÓN",
    nombre: "EJECUCIÓN",
  },
  {
    id: "SEGUIMIENTO",
    nombre: "SEGUIMIENTO",
  },
  {
    id: "FINALIZACIÓN",
    nombre: "FINALIZACIÓN",
  },
];

const DatosForm = () => {
  const { crearProyecto } = useGlobal();

  //Estados
  const [isChecked, setIsChecked] = useState(true);
  const [datosForm, setDatosForm] = useState({
    proyecto: "",
    nombre: "",
    division: "",
    id_cliente: "",
    documento: "",
    contacto: "",
    fecha_inicio: moment().format("YYYY-MM-DD"),
    fecha_termino: "",
    estado: "",
  });

  //Modal Cliente
  const [openClient, setOpenClient] = useState(false);
  const cancelButtonRefClient = useRef(null);

  const clearData = () => {
    setDatosForm({
      proyecto: "",
      nombre: "",
      division: "",
      id_cliente: "",
      documento: "",
      contacto: "",
      fecha_inicio: "",
      fecha_termino: "",
      estado: "",
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setDatosForm({ ...datosForm, [name]: value });
  };

  const handleClickModalClient = () => {
    setOpenClient(true);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      datosForm.estado = isChecked ? "EN PROCESO" : "PENDIENTE";
      const { status, data } = await crearProyecto(datosForm);
      if (status == 201) {
        toastMessage(data.message, 1);
        clearData();
      }
    } catch (error) {
      toastMessage(error.response.data.message, 3);
    }
  };

  return (
    <>
      <ClientModal
        dataClient={datosForm}
        open={openClient}
        setOpen={setOpenClient}
        cancelButtonRef={cancelButtonRefClient}
      />
      <div className="px-2 sm:px-10">
        <h2 className="my-5 text-base sm:text-xl font-bold uppercase text-[#606879]">
          Detalles del Proyecto
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex-row sm:flex items-center gap-5">
            <div className="w-full sm:w-[30%]">
              <div className="flex-row">
                <InputField
                  title="N° de Proyecto"
                  name="proyecto"
                  value={datosForm.proyecto}
                  handleChange={handleChange}
                  style="w-full"
                />
              </div>
            </div>
            <div className="w-full sm:w-[70%] mt-5 sm:mt-0">
              <InputField
                title="Nombre"
                name="nombre"
                value={datosForm.nombre}
                handleChange={handleChange}
                style="w-full"
              />
            </div>
          </div>
          <div className="flex-row sm:flex items-center gap-5 mt-5">
            <div className="w-full sm:w-[50%]">
              <div className="flex-row">
                <SelectedComponent
                  title="División (opcional)"
                  name="division"
                  value={datosForm.division}
                  titleOption="Seleccionar dato"
                  data={listDivision}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
              <InputField
                title="Cliente"
                name="cliente"
                read={true}
                handleClick={handleClickModalClient}
                placeholder="Has click para agregar cliente"
                style="w-full cursor-pointer"
              />
            </div>
          </div>
          <div className="flex-row sm:flex items-center gap-5 mt-5">
            <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
              <div className="flex-row">
                <InputField
                  title="Documento Cliente"
                  name="documento"
                  placeholder="Campo automatico"
                  value={datosForm.documento}
                  handleChange={handleChange}
                  read={true}
                  style="w-full"
                />
              </div>
            </div>
            <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
              <InputField
                title="Contacto Cliente"
                name="contacto"
                value={datosForm.contacto}
                type="number"
                handleChange={handleChange}
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
                  value={datosForm.fecha_inicio}
                  handleChange={handleChange}
                  type="date"
                  style="w-full"
                />
              </div>
            </div>
            <div className="w-full sm:w-[50%] mt-5 sm:mt-0">
              <InputField
                title="Fecha Termino"
                name="fecha_termino"
                value={datosForm.fecha_termino}
                handleChange={handleChange}
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
    </>
  );
};

export default DatosForm;
