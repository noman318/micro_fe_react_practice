export const API_SERVER = "http://localhost:5000";

export const getAllProducts = () => {
  fetch(`${API_SERVER}/products`)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
};

export const getProductById = (id: string) => {
  fetch(`${API_SERVER}/products/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
};

export const currentConvert = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});
