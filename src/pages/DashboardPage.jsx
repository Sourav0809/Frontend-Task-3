import DataTable from "../components/table/DataTable";
import ChartsContainer from "../components/charts/ChartsContainer";
const DashboardPage = () => {
  return (
    <div className=" w-[95%] min-[1500px]:w-[90%] font-custom  m-auto mt-8 flex flex-col min-[1200px]:flex-row justify-center items-center gap-4 overflow-hidden   ">
      <DataTable />
      <ChartsContainer />
    </div>
  );
};

export default DashboardPage;
