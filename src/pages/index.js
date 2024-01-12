import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HiChevronRight, HiMiniUser, HiMiniLockClosed } from "react-icons/hi2";
import { Toaster } from "sonner";
import { useGlobal } from "@/context/GlobalProvider";
import { toastMessage } from "@/helpers/general";

const Home = () => {
  const { signIn } = useGlobal();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [signInF, setSignInF] = useState({
    usuario: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setSignInF({ ...signInF, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { status, data } = await signIn(signInF);

      if (status == 201) {
        toastMessage(data.message, 1);
        localStorage.setItem("sddecomx", data.token);
        router.push("/home");
      }
    } catch (error) {
      toastMessage(error.response.data.message, 3);
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("sddecomx");

    if (token) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="w-[100%] min-h-screen flex items-center justify-center bg-[#a6a1e4]">
      <Toaster theme="light" position="top-right" duration={2000} />
      <div className="w-[80%] sm:w-[50%] lg:w-[40%] shadow-xl bg-white px-10 py-12 rounded-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-10 text-base sm:text-2xl underline uppercase font-bold sm:font-normal">
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
              value={signInF.usuario}
              className="pl-10 w-full text-sm sm:text-base text-[#7975aa] caret-[#2a2757] font-bold shadow-md border-b-2 border-[#9e9e9e] p-2 placeholder:text-[#7a7a7a] active:border-[#6A679E] hover:border-[#6A679E] focus:border-[#6A679E] transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="relative w-[100%] mt-6">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl">
              <HiMiniLockClosed />
            </span>
            <input
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
              value={signInF.password}
              className="pl-10 w-full text-sm sm:text-base text-[#7975aa] caret-[#2a2757] font-bold shadow-md border-b-2 border-[#9e9e9e] p-2 placeholder:text-[#7a7a7a] active:border-[#6A679E] hover:border-[#6A679E] focus:border-[#6A679E] transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex justify-center">
            {!loading ? (
              <button className="mt-10 bg-[#7975aa] text-xs sm:text-sm text-white font-bold shadow-md w-[100%] sm:w-[75%] flex items-center justify-between px-5 py-2 rounded-full border border-[#9e9e9e] hover:bg-white hover:text-[#7975aa] transition-all duration-300 ease-in-out">
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
