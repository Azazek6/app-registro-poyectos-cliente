import { useEffect } from "react";
import DatosForm from "@/components/Forms/DatosForm";
import Layout from "@/components/Layout";
import { tokenValidate } from "@/helpers/general";

const Home = () => {
  useEffect(() => {
    tokenValidate();
  }, []);
  return (
    <Layout>
      <DatosForm />
    </Layout>
  );
};

export default Home;
