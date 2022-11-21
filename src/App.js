import './styles.css';
import { useState } from 'react';
import { Form } from './components/form';
import { Home } from './components/home';
import { Header } from './components/header';
import { TransactionList } from './components/transactionList';
import { TotalMoney } from './components/totalMoney';
import { FilterBtns } from './components/filterButtons';
import { NoCard } from './components/noCard';

function App() {
  const [login, setLogin] = useState(false)
  const [filter, setFilter] = useState("Todos")

  const transactionType = [
    {
      label: "Entrada",
      value: "entrada"
    },
    {
      label: "Saída",
      value: "saída"
    },
]
  const [listTransactions, setListTransactions] = useState([
    {
      description:"Salário recebido",
      type: "entrada",
      value: 2500
    },
    {
      description: "Conta de luz",
      type: "saída",
      value: -150,
    }
  ])
  
  function addTransaction(list){
    setListTransactions([...listTransactions, list])
  }

  function removeTransaction(transactionTitle){
    const deletedValue = listTransactions.filter((transaction) => transaction.description !== transactionTitle)
    setListTransactions(deletedValue)
  }

  const filterValues = listTransactions.filter((transaction) => (filter === "Todos" ? true : transaction.type === filter))

  return (
    <div className='main-container'>
    {login ? (
      <div>
          <Header setLogin = {setLogin}/>

        <div className="main-finance-container">
            <div className='form-container'>
                <Form 
                  setListTransactions = {setListTransactions}
                  transactionType = {transactionType}
                  addTransaction = {addTransaction}
                />
                <TotalMoney 
                listTransactions = {listTransactions} />
            </div>

          {listTransactions.length === 0 ? (
            <div>
              <div>
                  <FilterBtns 
                  setFilter = {setFilter} 
                  transactionType = {transactionType}/>
              </div>
                <NoCard />
            </div>
          ):(
              <div>
                  <div>
                  <FilterBtns 
                  setFilter = {setFilter} 
                  transactionType = {transactionType}/>
                  </div>
              <div>
                  <TransactionList 
                  listTransactions = {filterValues} 
                  removeTransaction = {removeTransaction}/>
              </div>
            </div>
        )}
      </div>
    </div>
    
    ):(
        <Home setLogin = {setLogin}/>
    )}
    </div>
  );
}

export default App;
