import { FC } from 'react';
import Categoryes from './Categoryes';
import ProductContainer from './ProductContainer';
import { Box } from '@mui/material';

const MainPage: FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
      <Categoryes />
      <ProductContainer />
    </Box>
  )
};

export default MainPage;