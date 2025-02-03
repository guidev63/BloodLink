import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
