import { FC } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fakeStoreState, getProducts } from '../../store/fakeStoreSlice';
import { Product } from '../../store/types';
import ProductCard from './ProductCard';
import styles from './ProductContainer.module.scss'

const ProductContainer: FC = () => {
  const stateStore = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, [stateStore.fetchCategory, stateStore.category, dispatch]);

  return (
    <div className={styles.container}>
      {stateStore.products.map((product: Product) => (
          <ProductCard 
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            key={product.id}
          />
      ))}
    </div>
  )
};

export default ProductContainer;