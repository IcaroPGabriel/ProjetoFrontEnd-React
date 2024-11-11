import "./Section.css";
function Collections() {
  return (
    <> 
    <div className="container ">
      <div className="row gap-2 d-flex flex-row">
        <div className="col  fundoCard pt-5 pb-3  rounded-2">
          <div className="row d-flex flex-row">
            <div className="col">
              <h6 className="  desconto fs-6">30%off</h6>
              <h3 className="teste">novo drop supreme</h3>
              <button className="btn btn-light corFonteBotaoComp1">
                comprar
              </button>
            </div>
            <div className="col">
              <img src="camisa1.png" alt="" width={"150px"} />
            </div>
          </div>
        </div>
        <div className="col  fundoCard pt-5 pb-3  rounded-2">
          <div className="row d-flex flex-row">
            <div className="col">
              <h6 className="  desconto fs-6">30%off</h6>
              <h3>novo drop supreme</h3>
              <button className="btn btn-light corFonteBotaoComp1">
                comprar
              </button>
            </div>
            <div className="col">
              <img src="sapato2.png" alt="" width={"150px"} />
            </div>
          </div>
        </div>
        <div className="col  fundoCard pt-5  pb-3 rounded-2">
          <div className="row d-flex flex-row">
            <div className="col">
              <h6 className="  desconto fs-6">30%off</h6>
              <h3>novo drop supreme</h3>
              <button className="btn btn-light corFonteBotaoComp1">
                comprar
              </button>
            </div>
            <div className="col">
              <img src="fone.png" alt="" width={"150px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex gap-5 flex-row justify-content-center">
          <h3 className="text-center mt-5">coleções em destaque</h3>
          <div className="col col-1">
            <div className="icone">
              <img src="icone1.png" className="icone" alt="" width={"60px"} />
            </div>
            <h6>camisetas</h6>
          </div>
          <div className="col col-1">
            <div className="icone">
              <img src="icone2.png" className="icone" alt="" width={"60px"} />
            </div>
            <h6>calças</h6>
          </div>
          <div className="col col-1">
            <div className="icone">
              <img src="icone3.png" className="icone" alt="" width={"60px"} />
            </div>
            <h6>bonés</h6>
          </div>
          <div className="col col-1">
            <div className="icone">
              <img src="icone4.png" className="icone" alt="" width={"60px"} />
            </div>
            <h6>headphones</h6>
          </div>
          <div className="col col-1">
            <div className="icone">
              <img
                src="icone5.png"
                className="icone"
                alt=""
                width={"60 px"}
              />
            </div>
            <h6>tênis</h6>
          </div>
        </div>
      

    </div>
    </>
  );
}

export default Collections;
