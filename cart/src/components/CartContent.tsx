import React, { useEffect, useState } from "react";
import { jwt, login } from "../cart";
import Login from "./Login";
import MiniCart from "./MiniCart";

const CartContent = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const subscription = jwt.subscribe((val) => setToken(val ?? ""));
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div className="p-4">
      <Login />
      <MiniCart />
    </div>
  );
};

export default CartContent;
