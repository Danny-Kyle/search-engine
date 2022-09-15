import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

export const Routing = () => {
  const shouldRedirect = true;
  return (
    <div className="p-4">
      <Routes>
        <Route
          path="/"
          element={
            shouldRedirect ? <Navigate replace to="/search" /> : <Results />
          }
        ></Route>
        <Route path={"/search"} element={<Results />} />
        <Route path={"/images"} element={<Results />} />
        <Route path={"/news"} element={<Results />} />
        <Route path={"/videos"} element={<Results />} />
      </Routes>
    </div>
  );
};
