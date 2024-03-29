import { FC } from 'react';
import { useAppSelector } from './store/hooks';
import { fakeStoreState } from './store/fakeStoreSlice';
// import { cartState } from './store/cartSlice';
// import { userState } from './store/userSlice';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainPage from "./components/MainPage/MainPage";
import ProductPage from './components/Products/ProductPage';
import TopBar from './components/TopBar/TopBar';
import LogIn from './components/LoginAndRegistration/LogIn';
import Cart from './components/Cart/Cart';
import SingUp from './components/LoginAndRegistration/SingUp';
import UserProfile from './components/UserProfile/UserProfile';

const App: FC = () => {
  const stateStore = useAppSelector(fakeStoreState);

  return (
    <div>
      {stateStore.logInPage === true && (<LogIn />)}
      {stateStore.signUpPage === true && (<SingUp />)}
      <TopBar />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path={`/product/:productId`} element={<ProductPage />}/>
        <Route path={`/cart`} element={<Cart />}/>
        <Route path={`/userProfile`} element={<UserProfile />}/>
      </Routes>
      <Toaster position="bottom-center"/>
    </div>
  );
}

export default App;
