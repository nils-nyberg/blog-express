import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./routes/Blog";
import Auth from "./routes/Auth";
import Friends from "./routes/Friends";
import Profile from "./routes/Profile";
import Layout from "./Layout";
import "./styles/main.css";

import "./utils/i18n/i18next";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Blog />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error("Page could not render... root does not exist!");
}
