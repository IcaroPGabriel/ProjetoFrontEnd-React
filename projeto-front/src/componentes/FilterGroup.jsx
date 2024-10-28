import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";


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

        if (x.checked) 
            _selCategorias.push(x.value);
         else 
            _selCategorias = _selCategorias.filter(categoria => categoria.key !== x.value.key);
            setSelCategorias(_selCategorias);
        
    }


    return ( 
        <>
        <article className="card d-flex justify-content-center">
            <section className="d-flex flex-colunm gap-2">
                {categorias.map((categoria) => {
                    return(
                        <div key={categoria.key} className="d-flex align-itens-center">
                            <Checkbox inputId={categoria.key} name="categoria" value={categoria} onChange={escolherCategoria} checked={selCategorias.some((caixa) => caixa.key === categoria.key)} />
                            <label htmlFor={categoria.key} className="ml-3">
                                {categoria.key}
                            </label>
                        </div>
                    );
                })}
            </section>
        </article>
        </>
     );
}

export default FilterGroup;