import { Typography } from "@mui/material";
import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";

const Common = (props) => {
  return (
    <Typography component={"div"}>
      <Typography>
        <Header />
        <Navbar />
      </Typography>
      <Typography>{props.children}</Typography>
    </Typography>
  );
};

export default Common;
