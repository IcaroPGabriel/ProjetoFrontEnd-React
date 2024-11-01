import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";


function FilterGroup() {

    

     const [marcado,SetMarcado] = useState({
        adidas: false,
        nike: false,
        puma:false,
        kswiss: false,
        calenciaga: false

    });

     

    
    function Verificado(props) {
        
        const {name, checked} = props.target
        

        SetMarcado({
           adidas:name === "marca" ? checked : marcado.adidas
        })

    
        
    }

    
    
    return ( 
        <>
        <h1>Filtrar por</h1>
        <hr />
        <article>
            <h3>Marcas</h3>
            <section className="marcas">
                <input type="checkbox" name="marca" id="adidas" checked={marcado.adidas} onChange={Verificado} />
                <label htmlFor="adidas">Adidas</label>
                <br />
                <input type="checkbox" name="marca" id="nike" checked={marcado.nike} onChange={Verificado} />
                <label htmlFor="nike">Nike</label>
                <br />
                <input type="checkbox" name="marca" id="puma" checked={marcado.puma} onChange={Verificado} />
                <label htmlFor="puma">Puma</label>
                <br />
                <input type="checkbox" name="marca" id="kswiss" checked={marcado.kswiss} onChange={Verificado} />
                <label htmlFor="kswiss">K-Swiss</label>
                <br />
                <input type="checkbox" name="marca" id="calenciaga" checked={marcado.calenciaga} onChange={Verificado} />
                <label htmlFor="calenciaga">Calenciaga</label>
            </section>
            <h3>Categorias</h3>
            <section className="categoria">
                <input type="checkbox" name="categoria" id="esporte" />
                <label htmlFor="esporte">esporte e lazer</label>
                <br />
                <input type="checkbox" name="categoria" id="casual" />
                <label htmlFor="casual">casual</label>
                <br />
                <input type="checkbox" name="categoria" id="utilitario" />
                <label htmlFor="utilitario">utilitario</label>
                <br />
                <input type="checkbox" name="categoria" id="corrida" />
                <label htmlFor="corrida">corrida</label>
            </section>
            <h3>Gênero</h3>
            <section className="genero">
                <input type="checkbox" name="genero" id="masculino" />
                <label htmlFor="">masculino</label>
                <br />
                <input type="checkbox" name="genero" id="feminino" />
                <label htmlFor="">feminino</label>
                <br />
                <input type="checkbox" name="genero" id="unissex" />
                <label htmlFor="">unissex</label>
            </section>
            <section className="condicao">
                <h3>Estado</h3>
                <input type="radio" name="condicao" id="novo" />
                <label htmlFor="novo">novo</label>
                <br />
                <input type="radio" name="condicao" id="usado" />
                <label htmlFor="usado">usado</label>
            </section>
        </article>
        </>
     );
}

export default FilterGroup;