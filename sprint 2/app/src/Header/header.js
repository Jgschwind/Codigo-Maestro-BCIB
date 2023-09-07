import "./css/style.css";

function Login(){
    return(
        <div className="grid-container menuHamburger">
            <div className="header-logo">
                <img className="imgLogo" src="./images/logo/logo-1.png" alt="Logo Banco Nacional ITBA" />
            </div>
            <div>
                <div className="menuGrid">
                    <div className="buttonMenu">
                        <a href="./"><button className="btnInicioSesion">Iniciar Sesion</button></a>
                        <a href="./"><button className="btnRegistrarse">Hacete Cliente</button></a>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default function Header(){
    return(
        <div className="grid-container menuHamburger">  
            <Login />
        </div>
    )
}