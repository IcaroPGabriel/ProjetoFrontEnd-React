import { Checkbox } from 'primereact/checkbox';

function FilterGroup() {


    function caixas() {
        <div key={category.key} className="flex align-items-center">
                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                <label htmlFor={category.key} className="ml-2">{category.name}</label>
            </div>
    }
    
    
    return ( 
    <>
        <div>{caixas()}</div>
    </>
     );
}

export default FilterGroup;
        