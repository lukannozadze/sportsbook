import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/AppProvider.tsx";
import ReactQueryProvider from "./providers/ReactQueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ReactQueryProvider>
  </StrictMode>
);
