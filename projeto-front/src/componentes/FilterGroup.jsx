import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";


function FilterGroup() {
    
    const [checked,SetChecked] = useState(false);

    let marcas = 
    [{nome:"Adidas",key:"A"},
     {nome:"Nike", key:"N"},
     {nome:"Puma", key:"P"},
     {nome:"Umbro",key:"U"}
    ]

    let categorias = 
    [{nome:"Esporte e lazer", key:"ESP"},
     {nome:"Casual", key:"CAS"},
     {nome:"Utilitário", key:"UTI"},
     {nome:"Corrida",key:"COR"}
    ]

    let generos = 
    [{nome:"Masculino", key:"M"},
     {nome:"Feminino", key:"F"},
     {nome:"Unissex", key:"U"}
    ]

    let estado =
    [{nome:"Novo", key:"NEW"},
     {nome:"Usado", key:"USED"}
    ]
    
    return ( 
        <>
        
        </>
     );
}

export default FilterGroup;