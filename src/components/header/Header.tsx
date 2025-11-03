import "./style.css";
import Whatsapp from "../../assets/whatsapp.svg";
import Logo from "../../assets/logo-2.png";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo ponto encantado" />
      <nav>
        <a href="/">Inicio</a>
        <a href="/store">Loja</a>
        <a
          href="https://wa.me/5547988294603?text=Oi!%20Quero%20um%20amigurumi%20personalizado!!!"
          target="_blank"
          className="whatsapp"
        >
          <img src={Whatsapp} width={25} height={25} alt="Icone do Whatsapp" />
          Contato
        </a>
      </nav>
    </header>
  );
};
