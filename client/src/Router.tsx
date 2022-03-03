import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoListArea } from "./components/organisms/study/TodoListArea";
import { NotFound } from "./container/pages/NotFound";
import { Study } from "./container/templates/Study";
import { AboutMe } from "./container/templates/AboutMe";

export const Router: React.VFC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={< />} /> */}
          <Route path="study" element={<Study />} />
          {/* Todo用仮ページ */}
          <Route path="todos" element={<TodoListArea />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
