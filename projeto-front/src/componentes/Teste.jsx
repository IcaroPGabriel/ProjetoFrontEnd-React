import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

function TesteCaixa() {
    
const [cities, setCities] = useState([]);

const onCityChange = (e) => {
    let selectedCities = [...cities];
    if(e.checked)
        selectedCities.push(e.value);
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
}

return(
    <>
    <div className="col-12">
    <Checkbox inputId="cb1" value="New York" onChange={onCityChange} checked={cities.includes('New York')}></Checkbox>
    <label htmlFor="cb1" className="p-checkbox-label">New York</label>
</div>
<div className="col-12">
    <Checkbox inputId="cb2" value="San Francisco" onChange={onCityChange} checked={cities.includes('San Francisco')}></Checkbox>
    <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
</div>
<div className="col-12">
    <Checkbox inputId="cb3" value="Los Angeles" onChange={onCityChange} checked={cities.includes('Los Angeles')}></Checkbox>
    <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
</div>
    </>
)
}
export default TesteCaixa;