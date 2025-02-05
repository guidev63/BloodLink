import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { Login } from './pages/Login/Login';
import { Register } from './pages/components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Transactions />} />  {/* Página inicial */}
            <Route path="/login" element={<Login />} />     {/* Página de Login */}
            <Route path="/register" element={<Register />} />  {/* Página de Registro */}
          </Routes>
        </Router>
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;