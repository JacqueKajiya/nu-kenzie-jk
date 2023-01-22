import './index.css';
import '../../styles/button.css'

export const FilterBtns = ({ transactionType, setFilter, filter }) => {
    return (
        <div className='transaction-side'>
            <h2>Resumo Financeiro</h2>
            <ul className="filter-btns">
                <li className={filter === 'Todos'?"base-btn-grey filter-btn default-btn" : 'base-btn-grey filter-btn'} onClick={() => setFilter("Todos")}>Todos</li>
                {transactionType.map((type, index) => (
                    <li className="base-btn-grey filter-btn" key={index} onClick={() => setFilter(type.value)}>{type.label}</li>
                ))}
            </ul>
        </div>
    )
}