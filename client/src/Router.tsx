import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todos } from "./components/organisms/study/Todos";
import { NotFound } from "./container/pages/NotFound";
import { Study } from "./container/templates/Study";

export const Router: React.VFC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={< />} /> */}
          <Route path="study" element={<Study />} />
          {/* Todo用仮ページ */}
          <Route path="todos" element={<Todos />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
