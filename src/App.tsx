import { FC } from 'react';
import { useAppSelector } from './store/hooks';
import { fakeStoreState } from './store/fakeStoreSlice';
import { cartState } from './store/cartSlice';
import { Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import MainPage from "./components/MainPage/MainPage";
import ProductPage from './components/Product/ProductPage';
import TopBar from './components/TopBar/TopBar';
import LogIn from './components/LogIn/LogIn';
import Cart from './components/Cart/Cart';
import { userState } from './store/userSlice';

const App: FC = () => {
  const stateStore = useAppSelector(fakeStoreState);
  const stateCart = useAppSelector(cartState);
  const stateUser = useAppSelector(userState);

  // if (stateStore.isLoading === true || stateCart.isLoading === true || stateUser.isLoading === true) {
  //   toast.loading('Waiting...', {
  //     duration: 1000,
  //   });
  // }

  return (
    <div>
      {stateStore.logInPage === true && (<LogIn />)}
      <TopBar />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path={`/product/:productId`} element={<ProductPage />}/>
        <Route path={`/cart`} element={<Cart />}/>
      </Routes>
      <Toaster position="bottom-center"/>
    </div>
  );
}

export default App;
