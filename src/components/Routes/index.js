import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Common from "../Common";
// import FormControl from "../Form";
import MultipleFilter from "../MultipleFilter";
import FormValidate from "../FormValidate";
// import Document from "../Document";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accorion" element={<App />} />
        {/* <Route path="/" element={<FormControl />} /> */}
        {/* <Route path="/" element={<Document />} /> */}
        <Route path="/" element={<FormValidate />} />
        <Route path="/common" element={<Common />} />
        <Route path="/multiplefilter" element={<MultipleFilter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
