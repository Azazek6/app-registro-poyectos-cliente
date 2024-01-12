import { useEffect } from "react";
import AdministrativoForm from "@/components/Forms/AdministrativoForm";
import Layout from "@/components/Layout";
import { tokenValidate } from "@/helpers/general";

const Home = () => {
  useEffect(() => {
    tokenValidate();
  }, []);
  return (
    <Layout>
      <AdministrativoForm />
    </Layout>
  );
};

export default Home;
