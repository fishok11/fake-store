import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/MUITheme';
import Box from '@mui/material/Box';
import ProductContainer from "./components/ProductContainer";
import ProductPage from './components/ProductPage';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Routes>
          <Route index element={<ProductContainer />}/>
          <Route path={`/product/:productId`} element={<ProductPage />}/>
          {/* <Route path={`/group/:groupId/user-profile/:userId`} element={<UserProfile />}/> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
