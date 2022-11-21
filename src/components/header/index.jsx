import "./index.css"

export const Header = ({ setLogin }) => {

    return(
        <header>
            <img src="./img/Nu_KenzieLogo.png" alt="Nu_Logo" />
            <button className="base-btn-grey header-btn" type="button" onClick={() => setLogin(false)}>Inicio</button>
        </header>
    )
}