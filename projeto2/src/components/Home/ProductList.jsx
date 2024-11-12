import "./Section.css";
import Card from "./Card";
import products from "../../mock/products";
function ProductList() {
  return (
    <>
      <div className="container-fluid mt-5 d-flex flex-row flex-wrap">
        {products.map(function (product, i) {
          return (
            <Card
              key={i}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
      
    </>
  );
}
export default ProductList;
