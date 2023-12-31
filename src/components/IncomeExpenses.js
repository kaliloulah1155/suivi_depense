import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);

    const income=amounts
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item),0)
    .toFixed(0)

    const expense = (
        amounts.filter(item=>item<0).reduce((acc,item)=>(acc +=item),0)*(-1)
    ).toFixed(0)
    
  return (
      <div className="inc-exp-container">
          <div>
              <h4>REVENUS</h4>
              <p className="money plus">+ {income} F CFA</p>
          </div>
          <div>
              <h4>D&Eacute;PENSES</h4>
              <p className="money minus">- {expense} F CFA</p>
          </div>
      </div>
  )
}
