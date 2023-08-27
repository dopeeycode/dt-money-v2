import { createContext, useContext, useEffect, useState } from "react";
import { TransactionsProps } from "../pages/Transactions";

interface TransactionContextType {
  transactions: TransactionsProps[]
  isLoading: boolean
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
  children: React.ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()

      setTransactions(data)
      setIsLoading(false)
    }

    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, isLoading }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const { isLoading, transactions } = useContext(TransactionsContext)

  return { isLoading, transactions }
}