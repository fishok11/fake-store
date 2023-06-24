import { FC } from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product, Products } from '../store/types';
import { useSelector } from 'react-redux';
import { fakeStoreState } from '../store/fakeStoreSlice';

const ProductContainer: FC = () => {
  const state = useSelector(fakeStoreState)
  const [products, setProducts] = useState<Products | null>(null);
  
  useEffect(() => {
    if (state.category !== '') {
      fetch(`https://fakestoreapi.com/products/category/${state.category}`)
      .then(res=>res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
    } else {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
    }
  }, [state.fetchCategory, state.category]);

  if (products === null) return null;

  return (
    <div>
      {products.map((item: Product) => (
        <div>
          <ProductCard 
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.description}
            image={item.image}
            rating={item.rating}
          />
        </div>
      ))}
    </div>
  )
};

export default ProductContainer;