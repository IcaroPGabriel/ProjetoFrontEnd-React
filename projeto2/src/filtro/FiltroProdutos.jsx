
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from 'primereact/checkbox';



export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
            <RadioButton/>
        </div>
    )
}
        