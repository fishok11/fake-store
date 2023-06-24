import { FC } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fakeStoreState, getAllProducts, getSpecificCategory } from '../store/fakeStoreSlice';
import { Product } from '../store/types';
import ProductCard from './ProductCard';

const ProductContainer: FC = () => {
  const state = useAppSelector(fakeStoreState);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (state.category !== '') {
      dispatch(getSpecificCategory(state.category));
    } else {
      dispatch(getAllProducts());
    }
  }, [state.fetchCategory, state.category, dispatch]);

  return (
    <div>
      {state.products.map((product: Product) => (
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