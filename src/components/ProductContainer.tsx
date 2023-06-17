import { FC } from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; 
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
    } else {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
    }
  }, [state.fetchCategory, state.category]);

  if (products === null) return null;

  return (
    <Grid container spacing={3} columns={4} sx={{ width: '100%' }}>
      {products.map((item: Product) => (
        <Grid xs={1}  key={item.id}  maxWidth={311} minWidth={311} sx={{ width: '100%' }}>
          <ProductCard 
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.description}
            image={item.image}
            rating={item.rating}
          />
        </Grid>
      ))}
    </Grid>
  )
};

export default ProductContainer;