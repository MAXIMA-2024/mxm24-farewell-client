import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { Provider } from "@/components/ui/provider";

import "./global.css";
import "@fontsource-variable/lexend";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Routes />
    </Provider>
  </StrictMode>
);
