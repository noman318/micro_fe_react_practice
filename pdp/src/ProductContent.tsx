//@ts-expect-error
import { getProductById, currenyConvert } from "home/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  longDescription: string;
};

const ProductContent = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  useEffect(() => {
    getProductById(id)
      .then((result: Product) => {
        setProduct(result);
      })
      .catch((err: unknown) => {
        console.log("err", err);
      });
  }, [id]);
  if (!product) return null;
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product?.image} alt={product?.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product?.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currenyConvert.format(product?.price)}
          </div>
        </div>
        <div className="mt-10">{product?.description}</div>
        <div className="mt-10">{product?.longDescription}</div>
      </div>
    </div>
  );
};

export default ProductContent;
