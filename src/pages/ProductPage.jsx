

import { useEffect, useState } from 'react'
import ProductComponent from '../components/ProductComponent';
import { Link } from 'react-router';

export default function ProductPage() {
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
      <section className="grid grid-cols-4 gap5">
        {
          product.map((product)=>(
            <Link to={`${product?.slug}`} key={product?.slug}>
                <ProductComponent
                title={product?.title}
                image={product?.images[0]}
                price={product?.price}
                />
            </Link>
          ) )
        }
      </section>
    );
}


  

