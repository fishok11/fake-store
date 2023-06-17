import { FC } from 'react';
import Container from '@mui/material/Container';
import Categoryes from './Categoryes';
import NavBar from './NavBar';
import { Box } from '@mui/material';
import ProductContainer from './ProductContainer';

const MainPage: FC = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: '50px' }}>
      <NavBar />
      <Box sx={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        <Categoryes />
        <ProductContainer />
      </Box>
    </Container>
  )
};

export default MainPage;