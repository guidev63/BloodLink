import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { Login } from './pages/Login/Login';
import { Register } from './pages/components/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Transactions />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            
          </Routes>
        </Router>
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
