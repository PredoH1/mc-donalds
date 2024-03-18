import bigmac from "../../assets/bigmac.svg";
import "./Main.css";

function Main() {
  return (
    <>
      <main>
        <div className="container">
          <img src={bigmac} alt="" />
          <h1>
            BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span>
          </h1>
        </div>
      </main>
    </>
  );
}

export default Main;
