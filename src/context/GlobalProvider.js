import { useContext, useState } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { host_server } from "@/configurations/utils";

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useApps must be used within a GlobalContextProvider");
  }
  return context;
};

export const GlobalContextProvider = ({ children }) => {
  const [proyecto, setProyecto] = useState([]);
  const [reporte, setReporte] = useState([]);

  // -------------------------- INICIAR SESION ----------------------
  const signIn = async (user) => {
    return await axios.post(`${host_server}/auth/signin`, user);
  };

  // ------------------------ CLIENTES -------------------------------

  // ------------------------ crear
  const crearCliente = async (cliente) => {
    return await axios.post(`${host_server}/clientes`, cliente);
  };

  // ------------------------ Listar por documento
  const fetchClientesDocumento = async (documento, rol) => {
    return await axios.get(
      `${host_server}/clientes/documento/${documento}/rol/${rol}`
    );
  };

  // ------------------------- PROYECTOS -------------------------------
  // ------------------------- Crear
  const crearProyecto = async (proyecto) => {
    return await axios.post(`${host_server}/proyectos`, proyecto);
  };

  // ------------------------- Listar
  const fetchProyectos = async () => {
    try {
      const { data } = await axios.get(`${host_server}/proyectos`);
      setProyecto(data);
    } catch (error) {
      setProyecto([]);
    }
  };

  // ------------------------- ADMINISTRACION -------------------------------
  // ------------------------- Crear
  const crearDatosAdministrativos = async (dato) => {
    return await axios.post(`${host_server}/datos`, dato);
  };

  // ------------------------- REPORTES ------------------------------------
  const fetchReporteProyectos = async () => {
    try {
      const { data } = await axios.get(`${host_server}/proyectos/reporte`);
      setReporte(data);
    } catch (error) {
      setReporte([]);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        proyecto,
        reporte,
        signIn,
        crearCliente,
        fetchClientesDocumento,
        crearProyecto,
        fetchProyectos,
        crearDatosAdministrativos,
        fetchReporteProyectos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
