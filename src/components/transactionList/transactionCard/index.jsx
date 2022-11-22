import './index.css';
import '../../../styles/button.css'

export const Card = ({ transaction, removeTransaction }) => {

    return (
        <li className='transaction-card'>
            <div>
                <h3>{transaction.description}</h3>
                <small>{transaction.type}</small>
            </div>

            <div className='card-value'>
                <p>R$ {transaction.value}</p>
                <button className="trash-btn" onClick={() => removeTransaction(transaction.id)}>
                    <img src="./img/ButtonTrash-Light.png" alt="trash-btn" />
                </button>
            </div>
        </li>
    )
}