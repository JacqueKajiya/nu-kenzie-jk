import './home.css'
import '../../styles.css';
import '../../styles/button.css'

export const Home = ({ setLogin }) =>{

    return(
    <div className="home-container">
        <div className='description-home'>
            <img className="nu_logo" src="./img/Nu_KenzieLogo.png" alt="Nu_Logo" />
            <h1> Centralize o controle das suas finanças</h1>
            <small>de forma rápida e segura</small>
            <button className="base-btn home-btn" type="button" onClick={() => setLogin(true)}>Iniciar</button>
        </div>
        <figure>
            <img src="./img/Nu_Homefigure.svg" alt="home_img" />
        </figure>
    </div>

    )
}