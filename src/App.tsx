import NavBar from "./components/NavBar";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/MUITheme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
