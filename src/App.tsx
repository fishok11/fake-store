import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import ProductPage from './components/ProductPage/ProductPage';
import TopBar from './components/TopBar/TopBar';
import LogIn from './components/LogIn/LogIn';
import { useAppSelector } from './store/hooks';
import { fakeStoreState } from './store/fakeStoreSlice';

const App: FC = () => {
  const stateStore = useAppSelector(fakeStoreState);

  return (
    <div>
      {stateStore.logInPage === true && (<LogIn />)}
      <TopBar />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path={`/product/:productId`} element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
