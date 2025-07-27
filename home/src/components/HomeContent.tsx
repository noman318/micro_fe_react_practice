import { useEffect, useState } from "react";
import { currenyConvert, getAllProducts, Product } from "../products";

const HomeContent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getAllProducts()
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h1>All spinners</h1>
      <div className="mx-5 grid grid-cols-1 md:grid-cols-4 gap-5">
        {products?.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="flex">
              <div className="flex-grow font-medium">
                {/* <Link to={`/product/${item.id}`}>{item.name}</Link> */}
                <div aria-label={`/product/${item.id}`}>{item.name}</div>
              </div>
              <div className="flex-end">
                {currenyConvert.format(item.price)}
              </div>
            </div>
            <div className="text-sm mt-4">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
