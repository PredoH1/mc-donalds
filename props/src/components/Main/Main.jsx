import bigmac from "../../assets/bigmac.svg";
import bigmac2 from "../../assets/bigmac.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";

import "./Main.css";

function Main() {
  return (
    <>
      <main>
        <section className="container">
          <div className="top">
            <img src={bigmac} alt="" />
            <h1>
              BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span>
            </h1>
          </div>
          <div className="lanches">
            <img className="bigmac" src={bigmac2} alt="" />
            <img src={batata} alt="" />
            <img src={sorvete} alt="" />
          </div>
        </section>
        <section className="container2">
          <h1>Promoção</h1>
        </section>
      </main>
    </>
  );
}

export default Main;
