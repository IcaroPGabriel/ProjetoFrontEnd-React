import "./Section.css";

import React, { useEffect } from "react";
function Card2(props) {

   
    return (
        <>
            <div className="row  col-10 col-md-4  d-flex flex-column ">
                <div className=" cardSapatoComp3 col-10">

                    <img src={props.image} alt="" width={'150px'} className="offset-2  "/>
                </div>
                <div className="col-10">
                    <p className='corFontePreço'>{props.category}</p>
                    <p style={{fontSize:"18px"}}>{props.name}</p>
                    <h5 className="estiloPreco">{props.price}</h5>
                </div>
            </div>
        </>
    )
}
export default Card2