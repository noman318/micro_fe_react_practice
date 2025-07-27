import { useEffect, useState } from "react";
import { jwt } from "../cart";

export default function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe((c) => {
      setLoggedIn(!!jwt.value);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return loggedIn;
}
