import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { tableData } from "../../constants/tableData";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";
import { sortData } from "../../common/functions/sortData";
// calculating the total value

const DataTable = () => {
  const [data, setData] = useState(tableData);
  const [sortOrder, setSortOrder] = useState("desc");

  // to change the state of the order like acceding/deceding
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  };

  const sortTable = (key) => {
    setData((prev) => sortData(prev, key, sortOrder));
    toggleSortOrder();
  };

  // to sort the campaign
  const sortCampaignHandler = () => {
    sortTable("campaigns");
  };

  // to sort the clicks
  const sortClickHandler = () => {
    sortTable("clicks");
  };
  //to sort the Cost
  const sortCostHandeler = () => {
    sortTable("cost");
  };

  // to sort the conversions
  const sortConversionsHandeler = () => {
    sortTable("conversions");
  };

  // to sort the revenue
  const sortRevenueHandeler = (ele) => {
    sortTable("revenue");
  };

  let clicks = 0;
  let cost = 0;
  let conversions = 0;
  let revenue = 0;

  data.forEach((value) => {
    clicks += value.clicks;
    cost += value.cost;
    conversions += value.conversions;
    revenue += value.revenue;
  });
  return (
    <div className=" w-full min-[1200px]:w-1/2 bg-[#FFFF] flex flex-col justify-between items-center border  ">
      <div className=" bg-[#FFFF] w-full flex justify-between items-center border  p-3 ">
        <h1>Ad Insight</h1>
        <HelpOutlineIcon className=" text-2xl text-[#EBEBEB]" />
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 900 }}>
                <span
                  className=" flex justify-center items-center gap-1 font-custom py-1 cursor-pointer"
                  onClick={sortCampaignHandler}
                >
                  <p>Campaign</p>
                  <CodeIcon className="-rotate-90" fontSize="small" />
                </span>
              </TableCell>
              <TableCell style={{ fontWeight: 900 }} align="right">
                <span
                  className=" flex justify-center items-center gap-1 font-custom py-1 cursor-pointer"
                  onClick={sortClickHandler}
                >
                  <p>Clicks</p>
                  <CodeIcon className="-rotate-90" fontSize="small" />
                </span>
              </TableCell>
              <TableCell style={{ fontWeight: 900 }} align="right">
                <span
                  className=" flex justify-center items-center gap-1 font-custom py-1 cursor-pointer"
                  onClick={sortCostHandeler}
                >
                  <p>Cost</p>
                  <CodeIcon className="-rotate-90" fontSize="small" />
                </span>
              </TableCell>
              <TableCell style={{ fontWeight: 900 }} align="right">
                <span
                  className=" flex justify-center items-center gap-1 font-custom py-1 cursor-pointer"
                  onClick={sortConversionsHandeler}
                >
                  <p>Conversions</p>
                  <CodeIcon className="-rotate-90" fontSize="small" />
                </span>
              </TableCell>
              <TableCell style={{ fontWeight: 900 }} align="right">
                <span
                  className=" flex justify-center items-center gap-1 font-custom py-1 cursor-pointer"
                  onClick={sortRevenueHandeler}
                >
                  <p>Revenue</p>
                  <CodeIcon className="-rotate-90" fontSize="small" />
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.campaigns}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span className=" flex justify-center items-center font-custom py-1">
                    {row.campaigns}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className=" flex justify-center items-center font-custom py-1">
                    {row.clicks}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className=" flex justify-center items-center font-custom py-1">
                    USD &nbsp;{row.cost}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className=" flex justify-center items-center font-custom py-1">
                    {row.conversions}
                  </span>
                </TableCell>
                <TableCell align="right">
                  <span className=" flex justify-center items-center font-custom py-1">
                    USD &nbsp;{row.revenue}
                  </span>
                </TableCell>
              </TableRow>
            ))}
            <TableRow style={{ backgroundColor: "#fafafa" }}>
              <TableCell>
                <span className=" flex justify-center items-center font-custom py-1">
                  Total
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  {clicks}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  USD &nbsp;{cost}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  {conversions}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  USD &nbsp;{revenue}
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
