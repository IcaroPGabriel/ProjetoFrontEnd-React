import "./Section.css";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";
function Carrosel() {
  
  try {
    useEffect(() => {
 
      const sr = ScrollReveal({ reset: true });
      sr.reveal(".corDeFundoBranco", {
        rotate: { x: 0, y: 80, z: 0 },
        duration: 2500,
      });
    }, []); 
    return (
      <>
        <div className="container-fluid corDeFundoBranco">
          <div id="carouselExample" class="carousel slide ">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="container">
                  <div className="row d-flex flex-row">
                    <div className="col offset-1 align-self-center text-justify  d-flex flex-column justify-content-start">
                      <h6 className="text-warning text-justify">
                        Melhores ofertas personalizadas
                      </h6>
                      <h1 className="carrosselh1" >Queima de Estoque Nike: Qualidade e Estilo com Descontos Imperdíveis!</h1>
                      <p>
                      Não perca a chance de adquirir os sapatos Nike que você sempre quis com preços incríveis! Modelos esportivos, casuais e para performance agora com descontos arrasadores. Estoque limitado! Corra antes que acabe e eleve seu estilo ao próximo nível com a Nike
                      </p>
                      <button className="btn corBotaoRosa text-light mt-5 col-3">
                        Ver ofertas
                      </button>
                    </div>
                    <div className="col">
                      <img src="image.png" alt="" className="d-block w-100  rotation mb-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="container">
                  <div className="row d-flex flex-row">
                    <div className="col offset-1 align-self-center text-justify d-flex flex-column justify-content-start">
                      <h6 className="text-warning">
                        Melhores ofertas personalizadas
                      </h6>
                      <h1 className="carrosselh1">Queima de Estoque Adidas: Estilo e Conforto com Descontos Arrasadores!</h1>
                      <p>
                      Os sapatos Adidas que você sempre quis estão com preços imperdíveis! Modelos para todos os gostos e necessidades: esportivos, casuais e de alta performance. Aproveite a oportunidade para renovar seu guarda-roupa com a qualidade Adidas. Estoque limitado!
                      </p>
                      <button className="btn corBotaoRosa text-light mt-5 col-3">
                        Ver ofertas
                      </button>
                    </div>
                    <div className="col">
                      <img src="Tênis Adidas Ultimashow Masculino - Preto2.png" alt="" className="d-block w-100 rotation mb-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="container">
                  <div className="row d-flex flex-row ">
                    <div className="col offset-1  align-self-center text-justify d-flex flex-column justify-content-start">
                      <h6 className="text-warning">
                        Melhores ofertas personalizadas
                      </h6>
                      <h1 className="carrosselh1" >Velocidade e Conforto: Queima de Estoque Puma!</h1>
                      <p>
                      Chegou a hora de garantir os tênis Puma feitos para acompanhar sua performance! Perfeitos para corrida, academia e esportes, com tecnologia de ponta e design inovador. Aproveite descontos de até 50% em modelos selecionados. Estoque limitado. Corra antes que acabe!
                      </p>
                      <button className="btn corBotaoRosa text-light mt-5  col-3">
                        Ver ofertas
                      </button>
                    </div>
                    <div className="col">
                      <img src="puma.png" alt="" className="d-block w-100 rotation mb-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
        
      </>
      
      
      
    );
    
  } catch (error) {
    <h1>deu ruim</h1>
    
  }

  
  

}


export default Carrosel;
