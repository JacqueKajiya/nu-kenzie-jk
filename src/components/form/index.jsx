import { useState } from "react"
import './index.css';
import '../../styles/input.css'

export const Form = ({ transactionType, addTransaction, uuid }) => {
   
    const [formData, setFormData] = useState({
        id: "",
        description: "",
        value: "",
        type: transactionType[0].value,
    })

    function handleSubmit(formEvent) {
        formEvent.preventDefault()
        addTransaction(formData)
        setFormData({
            id: uuid,
            description:"",
            value: "",
            type: transactionType[0].value,
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Descrição</label>
            <input className="base-input form-input" required type="text" placeholder="Digite aqui sua descrição" value = {formData.description} onChange={(e)=> setFormData({...formData, description: e.target.value})}/>

        <div className = "value-box">

        <div>
            <label htmlFor="number">Valor</label>
            <input className="base-input small-form-input2" required type="number" placeholder="Valor" value = {formData.value} onChange={(e)=> setFormData({...formData, value: e.target.value})}/>
        </div>

        <div>
            <label htmlFor="select">Tipo de valor</label>
            <select className="base-input small-form-input"defaultValue = {formData.type} onChange={(e) => setFormData({...formData, type:e.target.value})}>
                {transactionType.map((type,index) =>( 
                    <option className = "base-input small-form-input" key={index} value= {type.value}>{type.label}</option>
                ))}
            </select>
        </div>

        </div>
            <button className="base-btn" type="submit">Inserir Valor</button>
        </form>
    )
}