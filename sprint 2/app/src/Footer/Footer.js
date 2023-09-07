import "./css/style.css";


function Icons() {
    return (
      <div className="footer-redes-app">
        <div className="redes">
          <a href="https://instagram.com/" target="_blank"><img className="img-redes" src="./images/redes-app/instagram.png" alt="logo instagram" /></a>
          <a href="https://es-la.facebook.com/" target="_blank"><img className="img-redes" src="./images/redes-app/facebook.png" alt="logo facebook" /></a>
          <a href="https://twitter.com/" target="_blank"><img className="img-redes" src="./images/redes-app/twitter.png" alt="logo twitter" /></a>
        </div>
        <div className="apps">
          <a href="https://play.google.com/store/" target="_blank"><img className="img-apps" src="./images/redes-app/google-play.png" alt="logo google playstore" /></a>
          <a href="https://www.apple.com/la/app-store/" target="_blank"><img className="img-apps" src="./images/redes-app/apple-store.png" alt="logo apple store" /></a>
        </div>
      </div>
    )
}

function Logo(){
  return(
      <div className="footer-logo">
        <img className="imgLogo" src="./images/logo/logo-1.png" alt="Logo Banco Nacional ITBA" />
        <p>© 2023 Banco Capital ITBA <br/> Todos los derechos Reservados.</p>
      </div>
  )
}


function Tos(){
    return(
      <div className="footer-condiciones">
        <a href="/">
          <p>Politica y Privacidad</p>
        </a>
        <a href="/">
          <p>Terminos y Condiciones</p>
        </a>
        <a href="/">
          <p>Atencion al Cliente</p>
        </a>
        <p>Contacto: </p> <p><a href="/">bancocapitalitba2023@hotmail.com</a></p>
      </div>
    )
}

export default function Footer(){
    return(
  <div className="container-footer">
      <Tos />
      <Logo />
      <Icons />    
  </div>
  )
}