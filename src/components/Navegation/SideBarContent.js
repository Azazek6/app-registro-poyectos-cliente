import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa6";
import jwt_decode from "jwt-decode";
import { HiDocumentText, HiIdentification, HiFolder } from "react-icons/hi2";

const SideBarContent = ({ children }) => {
  const router = useRouter();

  const [toogleSideBar, setToogleSideBar] = useState(true);
  const [userData, setUserData] = useState(null);

  const signOut = () => {
    localStorage.removeItem("sddecomx");
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  useEffect(() => {
    const token = localStorage.getItem("sddecomx");

    if (token) {
      const data = jwt_decode(token);
      setUserData(data);
    }
  }, []);

  return (
    <div className="w-[100%] flex h-screen bg-[#efeff7] overflow-hidden">
      {/* SIDEBAR DE OPCIONES */}
      <div
        className={`${
          toogleSideBar ? "w-[100%] sm:w-[80%] md:w-[25%]" : "w-[0%]"
        } bg-white border transition-all duration-500 ease-in-out`}
      >
        <div className="w-[100%] border-b-2 p-[19px]">
          <Link href="/home" className="flex items-center justify-center">
            <img src="/logo.png" alt="" className="w-[250px] rounded-full" />
          </Link>
        </div>
        {toogleSideBar && (
          <>
            <h2 className="mt-5 text-center text-xs text-[#606879]">
              {userData?.nombre} {userData?.apellidos}
            </h2>

            <h3 className="mt-3 text-center uppercase p-5 text-sm font-bold text-[#FF5151]">
              Registro de Proyectos
            </h3>

            <div className="w-[100%] border-b-2 p-[19px]">
              <Link
                href="/home/datos"
                className="flex items-center ml-10 gap-5 text-[#606879] hover:text-[#FF5151] font-bold text-sm transition-all duration-300 ease-in-out"
              >
                <HiIdentification className="text-xl" />
                Datos Generales
              </Link>
            </div>
            <div className="w-[100%] border-b-2 p-[19px]">
              <Link
                href="/home/administrativo"
                className="flex items-center ml-10 gap-5 text-[#606879] hover:text-[#FF5151] font-bold text-sm transition-all duration-300 ease-in-out"
              >
                <HiFolder className="text-xl" />
                Datos Administrativos
              </Link>
            </div>
            <div className="w-[100%] border-b-2 p-[19px]">
              <Link
                href="/home/reportes"
                className="flex items-center ml-10 gap-5 text-[#606879] hover:text-[#FF5151] font-bold text-sm transition-all duration-300 ease-in-out"
              >
                <HiDocumentText className="text-xl" />
                Reportes
              </Link>
            </div>
          </>
        )}
      </div>
      <div
        className={`${
          toogleSideBar ? "max-[400px]:-mr-48" : "sm:mr-0"
        } w-[100%] flex-row transition-all duration-500 ease-in-out`}
      >
        {/* SIDEBAR TOP */}
        <div className="w-[100%] bg-white p-5 border">
          <div className="w-[100%] flex items-center justify-between">
            {/* BARRA DE MENU */}
            <FaBars
              className="cursor-pointer text-2xl text-[#606879] hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#3e4249]"
              onClick={() => {
                setToogleSideBar(!toogleSideBar);
              }}
            />
            <p className="text-xs sm:text-sm text-[#606879]">ADMINISTRADOR</p>
            <Link
              href="#"
              onClick={signOut}
              className="text-xs sm:text-sm text-[#FF5151] hover:opacity-70 hover:text-[#606879] transition-all duration-300 ease-in-out"
            >
              Cerrar sesi&oacute;n
            </Link>
          </div>
        </div>
        {/* CONTENIDO */}
        <div className="w-[100%] p-5 overflow-x-auto h-screen">{children}</div>
      </div>
    </div>
  );
};

export default SideBarContent;
