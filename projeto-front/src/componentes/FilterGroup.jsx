import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";


function FilterGroup() {
    
    const [marcado,SetMarcado] = useState(false);

    function Marcar(props) {
        
        let {name, checked} = props.target

        SetMarcado({
            name == !false ? checked: marcado.name
        })

    }

    
    
    return ( 
        <>
        <h1>Filtrar por</h1>
        <hr />
        <article>
            <h3>Marcas</h3>
            <section className="marca">
                <input type="checkbox" name="adidas" id="adidas" checked={marcado} onChange={Marcar} />
                <label htmlFor="">adidas</label>
                <br />
                <input type="checkbox" name="nike" id="nike" />
                <label htmlFor="">nike</label>
                <br />
                <input type="checkbox" name="puma" id="puma" />
                <label htmlFor="">puma</label>
                <br />
                <input type="checkbox" name="umbro" id="umbro" />
                <label htmlFor="">umbro</label>
            </section>
            <h3>Categorias</h3>
            <section className="categoria">
                <input type="checkbox" name="esporte-lazer" id="esporte-lazer" />
                <label htmlFor="">esporte e lazer</label>
                <br />
                <input type="checkbox" name="casual" id="casual" />
                <label htmlFor="">casual</label>
                <br />
                <input type="checkbox" name="utilitario" id="utilitario" />
                <label htmlFor="">utilitario</label>
                <br />
                <input type="checkbox" name="corrida" id="corrida" />
                <label htmlFor="">corrida</label>
            </section>
            <h3>Gênero</h3>
            <section className="genero">
                <input type="checkbox" name="masculino" id="masculino" />
                <label htmlFor="">masculino</label>
                <br />
                <input type="checkbox" name="feminino" id="feminino" />
                <label htmlFor="">feminino</label>
                <br />
                <input type="checkbox" name="unissex" id="unissex" />
                <label htmlFor="">unissex</label>
            </section>
            <section className="condicao">
                <h3>Estado</h3>
                <input type="radio" name="novo" id="novo" />
                <label htmlFor="">novo</label>
                <br />
                <input type="radio" name="usado" id="usado" />
                <label htmlFor="">usado</label>
            </section>
        </article>
        </>
     );
}

export default FilterGroup;