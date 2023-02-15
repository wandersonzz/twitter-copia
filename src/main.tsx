import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "../src/global.css";

/* Vicio da otimização */

// forEach => Não term retorno
// map => Já tem retorno
// key => Serve para identificar e numerar cada elemento rederizado na tela

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
