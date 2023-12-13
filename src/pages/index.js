import { useState } from "react";
import { useRouter } from "next/router";
import { HiChevronRight, HiMiniUser, HiMiniLockClosed } from "react-icons/hi2";

const Home = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState({
    usuario: "",
    contraseña: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setSignIn({ ...signIn, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push("/home");
  };

  return (
    <div className="w-[100%] min-h-screen flex items-center justify-center bg-[#a6a1e4]">
      <div className="w-[30%] shadow-xl bg-white px-10 py-12 rounded-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-10 text-2xl underline uppercase">
            Bienvenido al Sistema
          </h2>
          <div className="relative w-[100%]">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl">
              <HiMiniUser />
            </span>
            <input
              type="text"
              placeholder="Usuario / Email"
              onChange={handleChange}
              name="usuario"
              value={signIn.usuario}
              className="pl-10 w-full text-[#7975aa] caret-[#2a2757] font-bold shadow-md border-b-2 border-[#9e9e9e] p-2 placeholder:text-[#7a7a7a] active:border-[#6A679E] hover:border-[#6A679E] focus:border-[#6A679E] transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="relative w-[100%] mt-6">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl">
              <HiMiniLockClosed />
            </span>
            <input
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              name="contraseña"
              value={signIn.contraseña}
              className="pl-10 w-full text-[#7975aa] caret-[#2a2757] font-bold shadow-md border-b-2 border-[#9e9e9e] p-2 placeholder:text-[#7a7a7a] active:border-[#6A679E] hover:border-[#6A679E] focus:border-[#6A679E] transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex justify-center">
            {!loading ? (
              <button className="mt-10 bg-[#7975aa] text-white font-bold shadow-md w-[75%] flex items-center justify-between px-5 py-2 rounded-full border border-[#9e9e9e] hover:bg-white hover:text-[#7975aa] transition-all duration-300 ease-in-out">
                INICIAR SESI&Oacute;N
                <HiChevronRight className="font-bold text-3xl" />
              </button>
            ) : (
              <div className="mt-8 w-16 h-16 border-t-4 border-[#7975aa] border-solid rounded-full animate-spin"></div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
