import { useEffect, useState } from "react";
import ProductDetailComponent from "../components/ProductDetailComponent";
import { useParams } from "react-router";

export default function ProductDetailPage() {
  // get slug from url 
  let params = useParams();
  let slug = params?.slug;
  console.log(`====> Value of Slug:`,slug);
  
  const [singleProduct, setSingleProduct] = useState();

  useEffect(()=>{
      async function fetchingSingleData () {
         const response = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`); 
        const singleData = await response.json();
        setSingleProduct(singleData);
      }
      fetchingSingleData();
  },[])

  console.log(`==> single product : ${singleProduct}`)

  return (
    <div>
      {/* navbar */}
         {/* <NavbarComponent/> */}

      <ProductDetailComponent
       title={singleProduct?.title}
       image={singleProduct?.images[0]}
       description={singleProduct?.description}
       price={singleProduct?.price}
      />
      
    </div>
  )
}
