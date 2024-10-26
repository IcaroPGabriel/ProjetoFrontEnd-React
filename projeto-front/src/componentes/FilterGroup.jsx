import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

 function FilterGroup() {
    const categories = [
        { name: 'Nike', key: 'N' },
        { name: 'Adidas', key: 'A' },
        { name: 'Puma', key: 'P' },
        { name: 'Umbro', key: 'U' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);


    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
            {categories.map((category) => {
            return (
                <div key={category.key} className="flex align-items-center">
                    <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                    <label htmlFor={category.key} className="ml-2">
                    {category.name}
                    </label>
                </div>
                    );
                })}
            </div>
        </div>
    )
}
        
        
   export default FilterGroup;