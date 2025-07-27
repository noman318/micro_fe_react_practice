import React, { useEffect, useState, useRef } from "react";
//@ts-expect-error
import { currenyConvert } from "home/products";

import { cart, clearCart } from "../cart";
import { TiShoppingCart } from "react-icons/ti";
type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const MiniCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef?.current) {
      //@ts-expect-error
      divRef.current.focus(); // Focus the div when the component mounts
    }
  }, [showCart]);

  // Define the type for the cart state
  type CartState = {
    cartItems: CartItem[];
    // add other properties if needed
  };

  useEffect(() => {
    setItems((cart.value as unknown as CartState)?.cartItems);
    const cartSubs = cart.subscribe((c: any) => {
      setItems(c?.cartItems);
    });
    return () => cartSubs.unsubscribe();
  }, []);

  if (!items) return null;
  return (
    <>
      <span
        onClick={() => setShowCart(!showCart)}
        id="showcart_span"
        className="flex gap-3"
      >
        <TiShoppingCart className=" text-2xl" id="showcart" size={40} />
        <small>{items.length}</small>
      </span>
      {showCart && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          tabIndex={0}
          ref={divRef}
          onBlur={() => setShowCart(false)}
          style={{
            width: 300,
            top: "2rem",
            left: "12rem",
          }}
        >
          <div
            className="grid gap-3 text-sm"
            style={{
              gridTemplateColumns: "1fr 3fr 10fr 2fr",
            }}
          >
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <div>{item.quantity}</div>
                <img src={item.image} alt={item.name} className="max-h-6" />
                <div>{item.name}</div>
                <div className="text-right">
                  {currenyConvert.format(item.quantity * item.price)}
                </div>
              </React.Fragment>
            ))}
            <div></div>
            <div></div>
            <div></div>
            <div>
              {currenyConvert.format(
                items.reduce((a, v) => a + v.quantity * v.price, 0)
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex-grow">
              <button
                id="clearcart"
                className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
            <div className="flex-end">
              <button
                className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
                onClick={clearCart}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MiniCart;
