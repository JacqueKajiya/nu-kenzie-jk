import './index.css'

export const TotalMoney = ({ listTransactions}) => {
    
    return (
        <div className="total-value-box">
            <div>
                <h3>Valor Total:</h3>
                <small>O valor se refere ao saldo</small>
            </div>

            <div>
                <p>R$ {listTransactions.reduce((acc, transaction) => acc + Number(transaction.value), 0)}</p>
            </div>
        </div>
    )
}