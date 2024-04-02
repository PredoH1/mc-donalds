import "./footer.css";
import logo from "../../assets/logo.svg";
import pla from "../../assets/pla.png";
import appstore from "../../assets/appstore.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="direitos-autorais">
          <img src={logo} alt="" />
          <p>© McDonald’s 2024</p>
        </div>

        <div className="download-lojas">
          <img src={pla} alt="" />
          <img src={appstore} alt="" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
