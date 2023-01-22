import './index.css';
import '../../../styles/button.css'

export const Card = ({ transaction, removeTransaction }) => {

    return (
        <li className={transaction.type === "entrada" ? 'transaction-card entry-bg' : 'transaction-card out-bg'}>
            <div className='card-description'>
                <h3>{transaction.description}</h3>
                <small>{transaction.type}</small>
            </div>

            <div className='card-value'>
                <p>R$ {transaction.type === "saída" ? "-"+transaction.value : transaction.value}</p>
                <button className="trash-btn" onClick={() => removeTransaction(transaction.id)}>
                    <img src="./img/ButtonTrash-Light.png" alt="trash-btn" />
                </button>
            </div>
        </li>
    )
}