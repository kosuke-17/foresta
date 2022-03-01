import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StackList } from "./components/organisms/study/StackList";
import { NotFound } from "./container/pages/NotFound";
import { Study } from "./container/templates/Study";

export const Router: React.VFC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={< />} /> */}
          <Route path="study" element={<Study />} />
          <Route path="study/stackList" element={<StackList />} />{/* 開発用 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
