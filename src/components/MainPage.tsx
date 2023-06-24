import { FC } from 'react';
import Categoryes from './Categories';
import ProductContainer from './ProductContainer';

const MainPage: FC = () => {
  return (
    <div>
      <Categoryes />
      <ProductContainer />
    </div>
  )
};

export default MainPage;