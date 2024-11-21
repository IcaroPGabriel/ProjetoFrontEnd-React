import "./Section.css";
import Card from "./Card";
import products from "../../mock/products";
function ProductList() {

  try {
    let cardsElements=[]

  for(let i=0; i<=7; i++){
    let produto=products[i]
    cardsElements.push(<Card category={produto.category} name={produto.name} price={produto.price} image={produto.image}/>)
  }
  return (
    <>
      <div className="container-fluid mt-5 d-flex flex-row flex-wrap">
        {cardsElements}
      </div>
      
    </>
  );
    
  } catch (error) {
    <h1>deu ruim</h1>
    
  }
  
}
export default ProductList;
