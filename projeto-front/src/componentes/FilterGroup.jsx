import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";


function FilterGroup() {

    // const marcas = [
    //     {name:'Adidas', value:'A'},
    //     {name:'Nike', value:'N'},
    //     {name:'Puma', value:'P'},
    //     {name:'K-Swiss',value:'K'},
    //     {name:'Calenciaga', value:'C'}]

    // const [marcado,SetMarcado] = useState(false);

    // function Verificado(props) {
        
    //     let {name, checked} = props.target

    //     SetMarcado({
            
    //     })

    //     console.log(name);
        
    // }

    
    
    return ( 
        <>
        <h1>Filtrar por</h1>
        <hr />
        <article>
            <h3>Marcas</h3>
            <section className="marca">
                <input type="checkbox" name="marca" id="adidas" />
                <label htmlFor="">adidas</label>
                <br />
                <input type="checkbox" name="marca" id="nike" />
                <label htmlFor="">nike</label>
                <br />
                <input type="checkbox" name="marca" id="puma" />
                <label htmlFor="">puma</label>
                <br />
                <input type="checkbox" name="marca" id="umbro" />
                <label htmlFor="">umbro</label>
            </section>
            <h3>Categorias</h3>
            <section className="categoria">
                <input type="checkbox" name="categoria" id="esporte-lazer" />
                <label htmlFor="">esporte e lazer</label>
                <br />
                <input type="checkbox" name="categoria" id="casual" />
                <label htmlFor="">casual</label>
                <br />
                <input type="checkbox" name="categoria" id="utilitario" />
                <label htmlFor="">utilitario</label>
                <br />
                <input type="checkbox" name="categoria" id="corrida" />
                <label htmlFor="">corrida</label>
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
                <label htmlFor="">novo</label>
                <br />
                <input type="radio" name="condicao" id="usado" />
                <label htmlFor="">usado</label>
            </section>
        </article>
        </>
     );
}

export default FilterGroup;