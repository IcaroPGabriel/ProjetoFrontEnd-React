import React from "react";
import { useState } from "react";


const CheckboxForm = () => {
    
    const[valueCheckBox,SetValueCheckBox] = useState({
        adidas: false,
        nike: false
    })

    function MarcarCaixa(props) {
        
        const {name, checked} = props.target

        SetValueCheckBox({
            adidas: name === 'adidas' ? checked : valueCheckBox.adidas
            
        })
        console.log(name);
        
    }
    
    return ( 
    <>
    <h3>Teste formulário checkbox</h3>
    <section>
        <input type="checkbox" name="adidas" id="adidas" checked={valueCheckBox.adidas} onChange={MarcarCaixa} />
        <label htmlFor="">Adidas</label>
    </section>
    <section>
    <input type="checkbox" name="nike" id="nike" checked={valueCheckBox.nike} onChange={MarcarCaixa} />
    <label htmlFor="">Nike</label>
    </section>
    </> );
}
 
export default CheckboxForm;