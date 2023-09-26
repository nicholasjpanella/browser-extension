import withSuspense from "@root/src/_framework/hoc/withSuspense";
import { HashRouter, Route, Navigate, Routes, Outlet } from "react-router-dom";
import Login from "./login/Login";
import Setup from "./setup/Setup";
import styled from "@emotion/styled";
import { useEffect } from "react";

const Container = styled.div({
  width: 320,
  height: 500,
});

Container.defaultProps = {
  children: <Outlet />,
};

export default withSuspense(function () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="login" element={<Login />} />
          <Route path="setup" element={<Setup />} />
          <Route path="" element={<Navigate to="/setup" />} />
        </Route>
        <Route path="" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
});
