import { useState, useRef, useEffect } from "react";
import InputField from "../InputField";
import SelectedComponent from "../SelectedComponent";
import TextComponent from "../TextComponent";
import AdministradorModal from "../Modal/AdministradorModal";
import IngenieroModal from "../Modal/IngenieroModal";
import GerenteModal from "../Modal/GerenteModal";
import JefeModal from "../Modal/JefeModal";
import SismeModal from "../Modal/SismeModal";
import MecanicoModal from "../Modal/MecanicoModal";
import { useGlobal } from "@/context/GlobalProvider";
import { toastMessage } from "@/helpers/general";

const AdministrativoForm = () => {
  const { crearDatosAdministrativos, fetchProyectos, proyecto } = useGlobal();
  //Modal Gerente
  const [openGerente, setOpenGerente] = useState(false);
  const cancelButtonRefGerente = useRef(null);

  //Modal Ingeniero
  const [openIngeniero, setOpenIngeniero] = useState(false);
  const cancelButtonRefIngeniero = useRef(null);

  //Modal Jefe
  const [openJefe, setOpenJefe] = useState(false);
  const cancelButtonRefJefe = useRef(null);

  //Modal Administrador
  const [openAdministrador, setOpenAdministrador] = useState(false);
  const cancelButtonRefAdministrador = useRef(null);

  //Modal Sisme
  const [openSisme, setOpenSisme] = useState(false);
  const cancelButtonRefSisme = useRef(null);

  //Modal Mecanico
  const [openMecanico, setOpenMecanico] = useState(false);
  const cancelButtonRefMecanico = useRef(null);

  //Estados
  const [dataAdministrative, setDataAdministrative] = useState({
    id_proyecto: "",
    id_gerente: "",
    gerente: "",
    id_residente: "",
    residente: "",
    id_jefe: "",
    jefe: "",
    id_administrador: "",
    administrador: "",
    id_sisme: "",
    sisme: "",
    id_mecanico: "",
    mecanico: "",
    telefono: "",
    comentarios: "",
  });

  const clearData = () => {
    setDataAdministrative({
      id_proyecto: "",
      id_gerente: "",
      gerente: "",
      id_residente: "",
      residente: "",
      id_jefe: "",
      jefe: "",
      id_administrador: "",
      administrador: "",
      id_sisme: "",
      sisme: "",
      id_mecanico: "",
      mecanico: "",
      telefono: "",
      comentarios: "",
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setDataAdministrative({ ...dataAdministrative, [name]: value });
  };

  const handleClickModalIngeniero = () => {
    setOpenIngeniero(true);
  };

  const handleClickModalGerente = () => {
    setOpenGerente(true);
  };

  const handleClickModalJefe = () => {
    setOpenJefe(true);
  };

  const handleClickModalAdministrador = () => {
    setOpenAdministrador(true);
  };

  const handleClickModalSisme = () => {
    setOpenSisme(true);
  };

  const handleClickModalMecanico = () => {
    setOpenMecanico(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status, data } = await crearDatosAdministrativos(
        dataAdministrative
      );
      if (status == 201) {
        toastMessage(data.message, 1);
        clearData();
      }
    } catch (error) {
      toastMessage(error.response.data.message, 3);
    }
  };

  useEffect(()=>{
    fetchProyectos()
  },[])

  return (
    <>
      <GerenteModal
        dataClient={dataAdministrative}
        open={openGerente}
        setOpen={setOpenGerente}
        cancelButtonRef={cancelButtonRefGerente}
      />
      <IngenieroModal
        dataClient={dataAdministrative}
        open={openIngeniero}
        setOpen={setOpenIngeniero}
        cancelButtonRef={cancelButtonRefIngeniero}
      />
      <JefeModal
        dataClient={dataAdministrative}
        open={openJefe}
        setOpen={setOpenJefe}
        cancelButtonRef={cancelButtonRefJefe}
      />
      <AdministradorModal
        dataClient={dataAdministrative}
        open={openAdministrador}
        setOpen={setOpenAdministrador}
        cancelButtonRef={cancelButtonRefAdministrador}
      />
      <SismeModal
        dataClient={dataAdministrative}
        open={openSisme}
        setOpen={setOpenSisme}
        cancelButtonRef={cancelButtonRefSisme}
      />
      <MecanicoModal
        dataClient={dataAdministrative}
        open={openMecanico}
        setOpen={setOpenMecanico}
        cancelButtonRef={cancelButtonRefMecanico}
      />

      <div className="px-2 sm:px-10">
        <h2 className="my-5 text-base sm:text-xl font-bold uppercase text-[#606879]">
          Detalles Administrativos
        </h2>
        <form onSubmit={handleSubmit}>
          <SelectedComponent
            title="Proyectos"
            titleOption="Selecciona el proyecto"
            name="id_proyecto"
            value={dataAdministrative.id_proyecto}
            handleChange={handleChange}
            data={proyecto}
          />
          <div className="flex-row sm:flex items-center gap-5 mt-5">
            <div className="w-full sm:w-[50%]">
              <div className="flex-row">
                <InputField
                  title="Gerente del Proyecto"
                  name="gerente"
                  read={true}
                  value={dataAdministrative.gerente}
                  handleClick={handleClickModalGerente}
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
                value={dataAdministrative.residente}
                handleClick={handleClickModalIngeniero}
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
                  value={dataAdministrative.jefe}
                  handleClick={handleClickModalJefe}
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
                value={dataAdministrative.administrador}
                handleClick={handleClickModalAdministrador}
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
                  handleClick={handleClickModalSisme}
                  value={dataAdministrative.sisme}
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
                handleClick={handleClickModalMecanico}
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
              value={dataAdministrative.telefono}
              handleChange={handleChange}
              style="w-full"
            />
          </div>
          <div className="mt-5">
            <TextComponent
              title="Comentarios"
              name="comentarios"
              value={dataAdministrative.comentarios}
              handleChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-5 mb-20 flex-col items-center">
            <button className="w-full sm:w-[50%] bg-[#ff5151] p-2 rounded-lg text-[#ffffff] font-bold hover:opacity-70 transition-all duration-300 ease-in-out">
              Guardar Datos
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdministrativoForm;
