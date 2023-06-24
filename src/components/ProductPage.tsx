import { FC } from "react";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fakeStoreState, getProduct } from '../store/fakeStoreSlice';

const ProductPage: FC = () => {
  const {productId} = useParams();
  const state = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId, dispatch])

  if (state.product === null) return null
  
  return (
    <>
      <img src={state.product.image} alt=""></img>
      <p>{state.product.title}</p>
      <p>{state.product.category}</p>
      <p>{state.product.description}</p>
      <p>{state.product.price} $</p>
      <p>{state.product.rating.count}</p>
      <p>{state.product.rating.rate}</p>
    </>
  );
}

export default ProductPage;