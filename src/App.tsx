import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { Login } from './pages/Login/Login';
import { Register } from './pages/components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheComponent from "./pages/TheComponent/TheComponent";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Transactions />}/>
            <Route path="/login" element={<Login />}/> 
            <Route path="/register" element={<Register />}/>
            <Route path="/thecomponent" element={<TheComponent />}/>
          </Routes>
        </Router>
      </TransactionsProvider>
    </ThemeProvider>
  );
}
export default App;
