import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import chartTableData from "../../constants/chartTableData";
import CodeIcon from "@mui/icons-material/Code";
import { sortData } from "../../common/functions/sortData";
import { useState } from "react";
const ChartTable = () => {
  const [data, setData] = useState(chartTableData);
  const [sortOrder, setSortOrder] = useState("desc");

  // to change the state of the order like acceding/deceding
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  };

  const sortTable = (key) => {
    setData((prev) => sortData(prev, key, sortOrder));
    toggleSortOrder();
  };

  // to sort the group
  const sortGroupHandeler = () => {
    sortTable("group");
  };

  // to sort the clicks
  const sortClicksHandeler = () => {
    sortTable("clicks");
  };

  // to sort the cost

  const sortCostHandeler = () => {
    sortTable("cost");
  };

  // to sort the conversion

  const sortConversionsHandeler = () => {
    sortTable("conversions");
  };

  // to sort the revenue

  const sortRevenueHandeler = () => {
    sortTable("revenue");
  };

  //calculating the total value of each
  let clicks = 0,
    cost = 0,
    conversions = 0,
    revenue = 0;

  data.forEach((value) => {
    cost += value.cost;
    clicks += value.clicks;
    conversions += value.conversions;
    revenue += value.revenue;
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 900 }}>
              <span
                className=" flex justify-center items-center gap-1 font-custom py-1 cursor-pointer"
                onClick={sortGroupHandeler}
              >
                <p>Group</p>
                <CodeIcon className="-rotate-90" fontSize="small" />
              </span>
            </TableCell>
            <TableCell style={{ fontWeight: 900 }} align="right">
              <span
                className=" flex justify-center items-center gap-1 font-custom py-1 cursor-pointer"
                onClick={sortClicksHandeler}
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
              key={row.group}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span className=" flex justify-center items-center font-custom py-1">
                  {row.group}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  {row.clicks}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  {row.cost}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  {row.conversions}
                </span>
              </TableCell>
              <TableCell align="right">
                <span className=" flex justify-center items-center font-custom py-1">
                  {row.revenue}
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
              <span className=" flex justify-center items-center  font-custom py-1">
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
  );
};

export default ChartTable;
