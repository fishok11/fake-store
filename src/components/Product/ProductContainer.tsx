import { FC } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fakeStoreState, getAllProducts, getSpecificCategory } from '../../store/fakeStoreSlice';
import { Product } from '../../store/types';
import ProductCard from './ProductCard';
import styles from './ProductContainer.module.scss'

const ProductContainer: FC = () => {
  const stateStore = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (stateStore.category !== '') {
      dispatch(getSpecificCategory(stateStore.category));
    } else {
      dispatch(getAllProducts());
    }
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