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
import SingUp from './components/SingUp/SingUp';

const App: FC = () => {
  const stateStore = useAppSelector(fakeStoreState);

  return (
    <div>
      {stateStore.logInPage === true && (<LogIn />)}
      {stateStore.singUpPage === true && (<SingUp />)}
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
