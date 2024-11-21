
import "./Section.css";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";
function AirJordan() {
 
 try {
  useEffect(() => {
 
    const sr = ScrollReveal({ reset: true });
    sr.reveal(".gradiente", {
      rotate: { x: 0, y: 80, z: 0 },
      duration: 1000,
    });
    sr.reveal(".corDefundoComp4", {
      rotate: { x: 0, y: 80, z: 0 },
      duration: 2000,
    });
  }, []);
  return (
    <>
    <br /><br /><br /><br />
      <div className="container-fluid corDeFundoComp4 mt-5">
          <div className="row  d-flex flex-row">
            <div className="col d-none d-md-block col-6 gradiente">
              <img src="sapato4.png" alt="" width={"500px"} />
            </div>
            <div className="col col-12 col-md-4 offset-1 align-self-center">
              <p className="corFonteRosa">
                <b>oferta especial</b>
              </p>
              <h1>queima de estoque nike</h1>
              <p>
              Não perca a chance de adquirir os sapatos Nike que você sempre quis com preços incríveis! Modelos esportivos, casuais e para performance agora com descontos arrasadores. Estoque limitado! Corra antes que acabe e eleve seu estilo ao próximo nível com a Nike
              </p>
              <button className="btn corBotaoRosa text-light"> ver ofertas</button>
            </div>
          </div>
      </div>
    </>
  );
 } catch (error) {
  <h1>deu ruim</h1>
 }

 
}
export default AirJordan;
