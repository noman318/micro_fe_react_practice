import React from "react";
import ReactDOM from "react-dom/client";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));
import "./index.css";
import "home/tailwind.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: cart</div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
