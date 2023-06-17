import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/MUITheme';
import Container from '@mui/material/Container';
import MainPage from "./components/MainPage";
import ProductPage from './components/ProductPage';
import NavBar from './components/NavBar';
const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ marginTop: '50px', marginBottom: '50px' }}>
      <NavBar />
        <Routes>
          <Route index element={<MainPage />}/>
          <Route path={`/product/:productId`} element={<ProductPage />}/>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
