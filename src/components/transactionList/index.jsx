import { Card } from "./TransactionCard"

export const TransactionList = ({ listTransactions, removeTransaction }) => {

    return (
        <ul>
            {listTransactions.map((transaction, index) => <Card key={index} transaction ={transaction} removeTransaction = {removeTransaction} />)}
        </ul>
    )

}