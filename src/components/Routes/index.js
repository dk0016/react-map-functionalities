import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Common from "../Common";
import FormControl from "../Form";
import MultipleFilter from "../MultipleFilter";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accorion" element={<App />} />
        <Route path="/" element={<FormControl />} />
        <Route path="/common" element={<Common />} />
        <Route path='/multiplefilter' element={<MultipleFilter />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
