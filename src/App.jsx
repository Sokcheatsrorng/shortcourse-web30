import { useEffect, useState } from "react";
import "./App.css";
import ProductComponent from "./components/ProductComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(()=>{
     async function fetchProductData(){
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const productData = await response.json();
        setProduct(productData);
     }
    //  calling function
     fetchProductData();

  },[])
  
  return (
   <>
   {/* navbar */}
   <NavbarComponent/>
   
    <section className="grid grid-cols-4 gap5">
      {
        product.map((product)=>(
          <ProductComponent
           title={product?.title}
           image={product?.images[0]}
           price={product?.price}
          />
        ) )
      }
    </section>
   </>
  );
}
export default App;
