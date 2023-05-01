import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField, Typography } from "@mui/material";

const rows = [
  {
    name: "Dinesh",
    age: "25",
    designation: "software developer",
    city: "Tiruttani",
    skill: "React",
  },
  {
    name: "Dk",
    age: "25",
    designation: "software developer",
    city: "Tiruttani",
    skill: "Node",
  },
  {
    name: "Balaji",
    age: "24",
    designation: "software developer",
    city: "Tanjoree",
    skill: "React",
  },
  {
    name: "Hari",
    age: "23",
    designation: "software developer",
    city: "Dindukal",
    skill: "React",
  },
  {
    name: "Vignesh",
    age: "25",
    designation: "software developer",
    city: "Madurai",
    skill: "React",
  },
  {
    name: "Nithish",
    age: "23",
    designation: "software developer",
    city: "Chennai",
    skill: "React",
  },
];

export default function MultipleFilter() {
  const [filterParams, setFilterParams] = React.useState({
    name: "",
    age: "",
    designation: "",
    city: "",
    skill: "",
  });
  // Avoid a layout jump when reaching the last page with empty rows.

  const loopData = rows.filter((item) => {
    const filterName =
      filterParams.name !== ""
        ? item.name.toLowerCase().indexOf(filterParams.name) !== -1
        : true;
    const filterSkill =
      filterParams.skill !== ""
        ? item.skill.toLowerCase().indexOf(filterParams?.skill) !== -1
        : true;
    const filterDesignation =
      filterParams.designation !== ""
        ? item.designation.toLowerCase().indexOf(filterParams?.designation) !==
          -1
        : true;
    const filterCity =
      filterParams.city !== ""
        ? item.city.toLowerCase().indexOf(filterParams?.city) !== -1
        : true;
    const filterAge =
      filterParams.age !== ""
        ? item.age.toLowerCase().indexOf(filterParams?.age) !== -1
        : true;
    return (
      filterName && filterSkill && filterDesignation && filterCity && filterAge
    );
  });
  console.log(loopData);
  return (
    <Typography component={"div"}>
      <Typography
        component={"div"}
        sx={{ display: "flex", justifyContent: "space-between", width: "97vw" }}
      >
        <Typography>
          <TextField
            label={"name"}
            onChange={(e) =>
              setFilterParams({ ...filterParams, name: e.target.value })
            }
          />
        </Typography>
        <Typography>
          <TextField
            label={"age"}
            onChange={(e) =>
              setFilterParams({ ...filterParams, age: e.target.value })
            }
          />
        </Typography>
        <Typography>
          <TextField
            label={"designation"}
            onChange={(e) =>
              setFilterParams({ ...filterParams, designation: e.target.value })
            }
          />
        </Typography>
        <Typography>
          <TextField
            label={"city"}
            onChange={(e) =>
              setFilterParams({ ...filterParams, city: e.target.value })
            }
          />
        </Typography>
        <Typography>
          <TextField
            label={"skill"}
            onChange={(e) =>
              setFilterParams({ ...filterParams, skill: e.target.value })
            }
          />
        </Typography>
      </Typography>
      <TableContainer component={Paper} style={{ width: "99vw" }}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {loopData.length ? (
              loopData?.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {row.age}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {row.designation}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {row.city}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {row.skill}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  minHeight: "200px",
                }}
              >
                No Record Found
              </Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Typography>
  );
}
