import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/MUITheme';
import Box from '@mui/material/Box';
import MainPage from "./components/MainPage";
import ProductPage from './components/ProductPage';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Routes>
          <Route index element={<MainPage />}/>
          <Route path={`/product/:productId`} element={<ProductPage />}/>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
