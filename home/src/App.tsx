import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div className=" text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: home</div>
    <div>Framework: react-18</div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
