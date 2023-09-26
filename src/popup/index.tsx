import { createRoot } from "react-dom/client";

import "./index.css";

import Router from "./views/router";

import refreshOnUpdate from "virtual:reload-on-update-in-view";
refreshOnUpdate("popup");

const root = createRoot(document.querySelector("#root"));
root.render(<Router />);
