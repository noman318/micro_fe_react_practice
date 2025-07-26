export const API_SERVER = "http://localhost:5000";

// Define or import the type T above, e.g.:
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
};
export type T = Product[];

export const getAllProducts = async (): Promise<T> => {
  try {
    const res = await fetch(`${API_SERVER}/products`);
    return await res.json();
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export const getProductById = async (id: string): Promise<T> => {
  try {
    const res = await fetch(`${API_SERVER}/products/${id}`);
    return await res.json();
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export const currenyConvert = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});
