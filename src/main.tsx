import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SearchContextProvider } from "./context/search.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);
