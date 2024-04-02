import bigmac from "../../assets/bigmac.svg";
import bigmac2 from "../../assets/bigmac.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import mecsofa from "../../assets/mec-sofa.png";
import lojas from "../../assets/lojas.png";
import juntos from "../../assets/estamos-juntos.png";

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
          <section className="cards-conjunto">
            <div className="cards">
              <img src={mecsofa} alt="" />
              <h4>Que tal um #MéquiNoSofá?</h4>
              <button>Clique aqui</button>
            </div>
            <div className="cards">
              <img src={lojas} alt="" />
              <h4>venha conhecer nossa nova loja</h4>
              <button>Clique aqui</button>
            </div>
            <div className="cards">
              <img src={juntos} alt="" />
              <h4>Confira as medidas que o Méqui adotou!</h4>
              <button>Clique aqui</button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Main;
