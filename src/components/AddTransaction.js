import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const [text,setText]=useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext)
   
    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random() * 100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
  return (
    <>
          <h3>Ajouter une nouvelle transaction</h3>
          <form onSubmit={onSubmit}>
              <div className="form-control">
                  <label htmlFor="text">Libellé</label>
                  <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Entrer le libellé..." />
              </div>
              <div className="form-control">
                  <label htmlFor="amount">Montant <br />
                      (dépense-négative, revenu-positif)
                  </label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Entrer le montant..." />
              </div>
              <button className="btn">Ajouter une transaction</button>
          </form>
    </>
  )
}
