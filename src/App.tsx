import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import ProductPage from './components/ProductPage';
import TopBar from './components/TopBar/TopBar';

const App: FC = () => {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path={`/product/:productId`} element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
