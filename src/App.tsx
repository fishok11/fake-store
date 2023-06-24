import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import ProductPage from './components/ProductPage';
import NavBar from './components/NavBar';
const App: FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path={`/product/:productId`} element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
