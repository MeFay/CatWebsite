import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
