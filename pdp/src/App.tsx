import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "home/tailwind.css";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: home</div>
    <div>Framework: react-18</div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
