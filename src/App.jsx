import { BrowserRouter } from "react-router-dom";

import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/js/bootstrap.bundle.min.js";

import "./assets/css/core.css";
import "./assets/css/responsive.css";
import Router from "./config/router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
