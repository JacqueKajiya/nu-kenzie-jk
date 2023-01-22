import "./styles.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { TotalMoney } from "./components/TotalMoney";
import { FilterBtns } from "./components/FilterButtons";
import { NoCard } from "./components/NoCard";

function App() {
  const [login, setLogin] = useState(false);
  const [filter, setFilter] = useState("Todos");

  const transactionType = [
    {
      label: "Entrada",
      value: "entrada",
    },
    {
      label: "Saída",
      value: "saída",
    },
  ];

  const uuidv = () => Math.round(Math.random() * 2000);

  const [listTransactions, setListTransactions] = useState([
    {
      id: uuidv(),
      description: "Salário recebido",
      type: "entrada",
      value: 2500,
    },
    {
      id: uuidv(),
      description: "Conta de luz",
      type: "saída",
      value: 150,
    },
  ]);

  function addTransaction(list) {
    setListTransactions([...listTransactions, list]);
  }

  function removeTransaction(transactionId) {
    const deletedValue = listTransactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setListTransactions(deletedValue);
  }

  const filterValues = listTransactions.filter((transaction) =>
    filter === "Todos" ? true : transaction.type === filter
  );

  return (
    <div className="main-container">
      {login ? (
        <div>
          <Header setLogin={setLogin} />

          <div className="main-finance-container">
            <div className="form-container">
              <Form
                uuid={uuidv}
                setListTransactions={setListTransactions}
                transactionType={transactionType}
                addTransaction={addTransaction}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>

            {listTransactions.length === 0 ? (
              <div className="transition-menu">
                <div>
                  <FilterBtns
                    setFilter={setFilter}
                    transactionType={transactionType}
                  />
                </div>
                <NoCard />
              </div>
            ) : (
              <div className="transition-menu">
                <div>
                  <FilterBtns
                    filter ={filter}
                    setFilter={setFilter}
                    transactionType={transactionType}
                  />
                </div>
                <div>
                  <TransactionList
                    listTransactions={filterValues}
                    removeTransaction={removeTransaction}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Home setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
