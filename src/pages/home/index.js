import { useEffect } from "react";
import Layout from "@/components/Layout";
import { tokenValidate } from "@/helpers/general";

const Home = () => {
  useEffect(() => {
    tokenValidate();
  }, []);
  return (
    <Layout>
      <h2 className="text-center text-2xl mt-[240px]">
        Bienvenido al Panel Administrativo de ENCOMARX S.A.C
      </h2>
    </Layout>
  );
};

export default Home;
