import "home/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductContent from "./ProductContent";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <ErrorBoundary>
      <Router>
        <Header />
        <Routes>
          <Route path="/product/:id" element={<ProductContent />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
