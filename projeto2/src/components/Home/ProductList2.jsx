import "./Section.css";
import Card2 from "./Card2";
import products from "../../mock/products";
function ProductList2() {
  return (
    <>
      <div className="container-fluid d-flex flex-column flex-md-row flex-wrap" style={{padding: 0}}  >
        {products.map(function (product, i) {
          return (
            <Card2
              key={i}
              category={product.category}
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
export default ProductList2;
