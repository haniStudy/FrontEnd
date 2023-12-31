import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

//BrowserRouter를 Router로 감싸는 이유: SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 해줌
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='detail/:id' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;