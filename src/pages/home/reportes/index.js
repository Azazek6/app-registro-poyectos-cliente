import { useEffect } from "react";
import Layout from "@/components/Layout";
import ReportTable from "@/components/Tables/ReportTable";
import { useGlobal } from "@/context/GlobalProvider";
import { tokenValidate } from "@/helpers/general";

const Home = () => {
  const { fetchReporteProyectos, reporte } = useGlobal();

  useEffect(() => {
    tokenValidate();
  }, []);

  useEffect(() => {
    fetchReporteProyectos();
  }, []);
  return (
    <Layout>
      <div className="mt-6 w-[100%] flex items-center justify-end">
        <span className="border border-black p-3 text-xs font-medium sm_text-sm">
          RUC: 20604314845
        </span>
      </div>
      <h2 className="mt-10 pl-5 text-base font-semibold sm:text-2xl">
        REPORTE DE LOS PROYECTOS DE OBRAS
      </h2>
      <div className="w-full mt-10">
        <ReportTable data={reporte} />
      </div>
    </Layout>
  );
};

export default Home;
