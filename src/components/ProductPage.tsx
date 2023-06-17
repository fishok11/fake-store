import { FC } from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from "../store/types";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ProductPage: FC = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then((data) => setProduct(data))
  }, [])

  return (
    <Container maxWidth="lg" sx={{paddingTop: '30px'}}>
      <img src={product?.image}></img>
      <Typography>{product?.title}</Typography>
      <Typography>{product?.category}</Typography>
      <Typography>{product?.description}</Typography>
      <Typography>{product?.price} $</Typography>
      <Typography>{product?.rating.count}</Typography>
      <Typography>{product?.rating.rate}</Typography>
    </Container>
  );
}

export default ProductPage;