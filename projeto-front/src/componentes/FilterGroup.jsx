import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { primeflex } from "/node_modules/primeflex/primeflex.css";

function FilterGroup() {
    let categorias = [
        {nome:'Adidas', key:'A1' },
        {nome: 'Balenciaga', key:'C2'},
        {nome:'K-Swiss', key:'K3'},
        {nome:'Nike', key:'N4'},
        {nome:'Puma', key:'P5'}
    ]
    let [selCategorias, setSelCategorias] = useState([categorias[0]]);

    function escolherCategoria(x) {
        let _selCategorias = [...selCategorias]

        if (x.checked) {
            _selCategorias.push(x.value);
        } else {
            _selCategorias = _selCategorias.filter(categoria => categoria.key !== x.value.key);
            setSelCategorias(_selCategorias);
        }
    }



    return ( 
        <>
        <article className="card d-flex justify-content-center">
            <section className="d-flex-colunm">
                <div>

                </div>
            </section>
        </article>
        </>
     );
}

export default FilterGroup;