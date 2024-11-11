import "./Section.css";
function Carrosel() {
  return (
    <>
      <div className="container-fluid corDeFundoBranco">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container">
                <div className="row d-flex flex-row">
                  <div className="col offset-1 align-self-center text-justify  d-flex flex-column justify-content-start">
                    <h6 className="text-warning text-justify">
                      Melhores ofertas personalizadas
                    </h6>
                    <h1>Queima de estoque nike</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt, quaerat.
                    <button className="btn corBotaoRosa text-light mt-5 col-3">
                      Ver ofertas
                    </button>
                  </div>
                  <div className="col">
                    <img src="image.png" alt="" className="d-block w-100" />
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
                    <h1>Queima de estoque nike</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt, quaerat.
                    <button className="btn corBotaoRosa text-light mt-5 col-3">
                      Ver ofertas
                    </button>
                  </div>
                  <div className="col">
                    <img src="image.png" alt="" className="d-block w-100" />
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
                    <h1>Queima de estoque nike</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt, quaerat.
                    <button className="btn corBotaoRosa text-light mt-5  col-3">
                      Ver ofertas
                    </button>
                  </div>
                  <div className="col">
                    <img src="image.png" alt="" className="d-block w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Carrosel;
