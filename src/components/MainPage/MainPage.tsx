import { FC } from 'react';
import SideBar from '../SideBar/SideBar';
import ProductContainer from '../Product/ProductContainer';
import styles from './MainPage.module.scss'

const MainPage: FC = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <ProductContainer />
    </div>
  )
};

export default MainPage;