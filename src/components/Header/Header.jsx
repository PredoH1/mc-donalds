import logo from "../../assets/logo.svg";
import app from "../../assets/app.svg";
import app2 from "../../assets/appapp2.svg";
import "./header.css";

function Header() {
  return (
    <>
      <header className="menu">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="opcoes-menu">
          <div className="download">
            <img src={app} alt="" />
            <p>Baixe o App</p>
          </div>

          <div className="pedido">
            <h4>Peça seu Méqui</h4>
            <img src={app2} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
