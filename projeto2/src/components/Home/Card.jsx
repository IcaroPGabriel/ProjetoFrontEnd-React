import "./Section.css";

import React, { useEffect } from "react";
function Card(props) {
   
   try {

return (
    <>
        <div className="row  col-10 col-md-3  d-flex flex-column ">
            <div className=" cardSapatoComp3 col-10">

                <img src={props.image} alt="" width={'150px'} className="offset-2 rotation"/>
            </div>
            <div className="col-10">
                <p className='corFontePreço'>{props.category}</p>
                <p style={{fontSize:"18px"}}>{props.name}</p>
                <h5 className="estiloPreco">{props.price}</h5>
            </div>
        </div>
    </>
)
    
   } catch (error) {
    <h1>deu ruim</h1>
    
   }
 
}
export default Card