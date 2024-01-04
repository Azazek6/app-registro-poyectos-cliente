import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import InputComponent from "../InputField";
import SelectedComponent from "../SelectedComponent";
import { useGlobal } from "@/context/GlobalProvider";
import { toastMessage } from "@/helpers/general";

const listDocument = [
  {
    id: "dni",
    nombre: "DNI",
  },
  {
    id: "ruc",
    nombre: "RUC",
  },
];

const ClientModal = ({ dataClient, open, setOpen, cancelButtonRef }) => {
  const { crearCliente, fetchClientesDocumento } = useGlobal();
  const router = useRouter();

  const [inputStatus, setInputStatus] = useState(true);
  const [searchDocument, setSearchDocument] = useState("");
  const [existClient, setExistClient] = useState(false);
  const [client, setClient] = useState({
    id: "",
    type: "",
    document: "",
    names: "",
    rol: "JEFE",
  });

  const handleChange = ({ target: { name, value } }) => {
    setClient({ ...client, [name]: value });
  };

  const handleChangeSearch = (e) => {
    setSearchDocument(e.target.value);
  };

  const clearData = () => {
    setClient({
      id: "",
      type: "",
      document: "",
      names: "",
      rol: "JEFE",
    });
  };

  const handleClickSearch = async (e) => {
    e.preventDefault();
    if (searchDocument == "") {
      toastMessage("Campo vacio para la busqueda", 2);
      return;
    }

    try {
      const { status, data } = await fetchClientesDocumento(searchDocument);

      if (status == 200) {
        toastMessage("Cliente encontrado", 1);
        dataClient.id_cliente = data.id_cliente;
        dataClient.documento = `${data.tipo_documento}: ${data.documento}`;
        setClient({
          id: data.id_cliente,
          type: data.tipo_documento,
          document: data.documento,
          names: data.nombre,
        });
        setOpen(false);
      }
    } catch (error) {
      //clearData();
      toastMessage(error.response.data.message, 3);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status, data } = await crearCliente(client);

      if (status == 201) {
        dataClient.id_cliente = data.id_cliente;
        dataClient.documento = `${client.type}: ${client.document}`;
        toastMessage(data.message, 1);
        clearData();
        setOpen(false);
        setExistClient(false);
      }
    } catch (error) {
      toastMessage(error.response.data.message, 3);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      sdf
                    </div> */}
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h2 className="my-5 text-base sm:text-xl font-bold uppercase text-[#606879]">
                          Datos del Jefe
                        </h2>
                        {!existClient && (
                          <div className="w-[100%] flex-row gap-5 items-center sm:flex mt-3">
                            <div className="flex-row">
                              <InputComponent
                                title="Documento a buscar"
                                placeholder="Ingresa datos"
                                type="number"
                                handleChange={handleChangeSearch}
                                style="w-full"
                              />
                            </div>
                            <button
                              onClick={handleClickSearch}
                              className="bg-[#117936] mt-8 text-white p-2 rounded-lg hover:opacity-70 transition-all duration-300 ease-in-out"
                            >
                              BUSCAR
                            </button>
                          </div>
                        )}

                        {existClient && (
                          <>
                            <div className="w-full flex items-center gap-5">
                              <div className="flex-row">
                                <SelectedComponent
                                  title="Tipo de Documento"
                                  titleOption="Seleccione Documento"
                                  data={listDocument}
                                  name="type"
                                  value={client.type}
                                  handleChange={handleChange}
                                />
                              </div>
                              <div className="flex-row">
                                <InputComponent
                                  title="Documento"
                                  style="w-full"
                                  type="number"
                                  name="document"
                                  value={client.document}
                                  handleChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="mt-3">
                              <InputComponent
                                title="Nombre o Razón Social"
                                style="w-full"
                                name="names"
                                value={client.names}
                                handleChange={handleChange}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {existClient && (
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 mb-4 sm:mb-0 sm:ml-3 sm:w-auto"
                        ref={cancelButtonRef}
                      >
                        Guardar
                      </button>
                    )}

                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-[#fba56c] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-70 mb-4 sm:mb-0 sm:ml-3 sm:w-auto"
                      onClick={() => {
                        if (inputStatus) {
                          setInputStatus(false);
                          setExistClient(true);
                        } else {
                          clearData();
                          setInputStatus(true);
                          setExistClient(false);
                        }
                      }}
                    >
                      {inputStatus ? "Nuevo" : "Cancelar"}
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cerrar
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ClientModal;
