import { PieChart } from "@mui/x-charts/PieChart";
import { useState } from "react";
const PiChart = () => {
  return (
    <div
      className={`w-full flex ml-16 pl-2 min-[420px]:ml-0  justify-center items-center `}
    >
      <PieChart
        colors={["#ff823c", "#0096ff", "#323C46"]}
        series={[
          {
            data: [
              { id: 0, value: 20, label: "40% Male" },
              { id: 1, value: 15, label: "35% Female" },
              { id: 2, value: 10, label: "25% Others" },
            ],
            innerRadius: 80,
            outerRadius: 110,
            paddingAngle: 3,
            cx: 80,
          },
        ]}
        width={350}
        height={250}
      />
    </div>
  );
};

export default PiChart;
