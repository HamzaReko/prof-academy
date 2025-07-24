import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Contact from "./Contact/Contact";
import Teacher from "./Teacher/Teacher";
import Home from "./Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'swiper/css/bundle';
import { HelmetProvider } from 'react-helmet-async';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="teacher" element={<Teacher />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
// npm i --save-dev gh-pages --legacy-peer-deps
