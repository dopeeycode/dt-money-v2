import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
   </ThemeProvider>
  )
}
