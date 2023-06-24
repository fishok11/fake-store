import { FC } from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from "../store/types";

const ProductPage: FC = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then((data) => setProduct(data))
  }, [])

  return (
    <>
      <img src={product?.image}></img>
      <p>{product?.title}</p>
      <p>{product?.category}</p>
      <p>{product?.description}</p>
      <p>{product?.price} $</p>
      <p>{product?.rating.count}</p>
      <p>{product?.rating.rate}</p>
    </>
  );
}

export default ProductPage;