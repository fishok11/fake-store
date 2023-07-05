import { FC } from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fakeStoreState, getProduct } from '../../store/fakeStoreSlice';
import styles from './ProductPage.module.scss';

const ProductPage: FC = () => {
  const {productId} = useParams();
  const state = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1)
  const decrease = () => {
    if (count > 1) {
      setCount(count => count - 1);
    }
  };
  const increase = () => {
    setCount(count => count + 1);
  };


  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId, dispatch])

  if (state.product === null) return null
  if (state.isLoading === true) return null
  
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={state.product.image} alt="" className={styles.image}/>
        </div>
        <div>
          <div className={styles.titleContainer}>
            <p className={styles.title}>{state.product.title}</p>
            <p className={styles.rating}>{state.product.rating.rate}/{state.product.rating.count}</p>
          </div>
          <div className={styles.actionContainer}>
            <p className={styles.price}>{state.product.price * count} $</p>
            <div className={styles.counterContainer}>
              <button className={styles.counterSimbol} onClick={() => decrease()}>-</button>
              <div className={styles.counterSimbol}>{count}</div>
              <button className={styles.counterSimbol} onClick={() => increase()}>+</button>
            </div>
            <button className={styles.button}>Add to cart</button>
          </div>
        </div>
      </div>
      {/* <p className={styles.container}>{state.product.category}</p> */}
      <p className={styles.description}>{state.product.description}</p>
    </div>
  );
}

export default ProductPage;