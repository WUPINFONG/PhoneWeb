import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // 確保使用 react-dom/client
import { BrowserRouter } from "react-router-dom"; // 導入 BrowserRouter
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/PhoneWeb"> {/* 這裡加上 BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
