import { useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
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

  return (
    <GlobalContext.Provider
      value={{
        proyecto,
        crearCliente,
        fetchClientesDocumento,
        crearProyecto,
        fetchProyectos,
        crearDatosAdministrativos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
