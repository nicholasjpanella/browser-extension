import withSuspense from "@root/src/_framework/hoc/withSuspense";
import { HashRouter, Route, Navigate, Routes, Outlet } from "react-router-dom";
import Hello from "./hello/Hello";
import styled from "@emotion/styled";

const Container = styled.div({
  width: 320,
  height: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

Container.defaultProps = {
  children: <Outlet />,
};

export default withSuspense(function () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="hello" element={<Hello />} />
          <Route path="" element={<Navigate to="/hello" />} />
        </Route>
        <Route path="" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
});
