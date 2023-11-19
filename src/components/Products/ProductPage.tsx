import { FC } from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fakeStoreState, getProduct } from '../../store/fakeStoreSlice';
import styles from './ProductPage.module.scss';
import { useCookies } from "react-cookie";
import { CartItemToAdded } from "../../store/types";
import { addProductToCart } from "../../store/cartSlice";

const ProductPage: FC = () => {
  const {productId} = useParams();
  const stateStore = useAppSelector(fakeStoreState);
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
  }, [productId, dispatch]);

  const [cookies] = useCookies(['user']);
  const date = new Date();

  if (productId === undefined) return null
  
  const cartItem: CartItemToAdded = {
    userId: cookies.user?.id,
    products: [{productId: +productId, quantity: count}],
  }

  if (stateStore.product === null) return null
  if (stateStore.isLoading === true) return null
  
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={stateStore.product.image} alt="" className={styles.image}/>
        </div>
        <div>
          <div className={styles.titleContainer}>
            <p className={styles.title}>{stateStore.product.title}</p>
            <p className={styles.rating}>{stateStore.product.rating.rate}/{stateStore.product.rating.count}</p>
          </div>
          <div className={styles.actionContainer}>
            <p className={styles.price}>{stateStore.product.price * count} $</p>
            <div className={styles.counterContainer}>
              <button className={styles.counterSimbol} onClick={() => decrease()}>-</button>
              <div className={styles.counterSimbol}>{count}</div>
              <button className={styles.counterSimbol} onClick={() => increase()}>+</button>
            </div>
            <button className={styles.button} onClick={() => dispatch(addProductToCart(cartItem))}>Add to cart</button>
          </div>
        </div>
        <p className={styles.description}>{stateStore.product.description}</p>
      </div>
      {/* <p className={styles.container}>{state.product.category}</p> */}
    </div>
  );
}

export default ProductPage;