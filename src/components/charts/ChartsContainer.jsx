import React, { useState } from "react";
import PiChart from "./PiCharts";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import TableChartIcon from "@mui/icons-material/TableChart";
import ChartTable from "./ChartTable";
const ChartsContainer = () => {
  const [showchart, setShowChart] = useState(true);

  return (
    <div className=" w-full min-[1200px]:w-1/2 bg-[#FFFF] border ">
      <div className=" bg-[#FFFF] w-full flex justify-between items-center border  p-3 ">
        <div>
          <h1>Ad Insight</h1>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <select className=" border border-gray-700 px-2 " disabled>
            <option value={"clicks"}>clicks</option>
          </select>
          <HelpOutlineIcon className=" text-2xl text-[#EBEBEB]" />
        </div>
      </div>
      {showchart ? <PiChart /> : <ChartTable />}
      <div className=" flex justify-end  items-end px-3">
        <div
          className={` ${
            !showchart
              ? " mt-[4.5rem] min-[1500px]:mt-[4rem]"
              : "  min-[1500px]:mt-[2rem]"
          } py-2  px-4 mb-3 gap-4 border rounded-full flex justify-center items-center `}
        >
          <div
            onClick={() => {
              setShowChart((prev) => !prev);
            }}
          >
            <DataSaverOffIcon
              className={`cursor-pointer  ${
                showchart && "bg-blue-600 text-white rounded-md "
              }`}
            />
          </div>
          <div
            onClick={() => {
              setShowChart((prev) => !prev);
            }}
          >
            <TableChartIcon
              className={`cursor-pointer ${
                !showchart && "bg-blue-600 text-white rounded-md"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
