import { FC } from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; 
import Container from '@mui/material/Container';
import ProductCard from './ProductCard';
import { Product, Products } from '../store/types';
import Categoryes from './Categoryes';

const ProductContainer: FC = () => {
  const [products, setProducts] = useState<Products | null>(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
  }, []);

  if (products === null) return null;

  return (
    <Container maxWidth="xl" sx={{ paddingTop: '30px', display: 'flex', gap: '15px' }}>
      <Categoryes />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        {products.map((item: Product) => (
          <Grid xs={2} sm={4} md={4} key={item.id}>
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
    </Container>
  )
};

export default ProductContainer;