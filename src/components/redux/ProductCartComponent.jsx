import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export function ProductCartComponent({
  name, description, thumbnail, priceOut, addToCart
}) {
  return (
    <div className="h-screen w-full flex items-center justify-center  bg-gray-200 dark:bg-gray-800">
  {/* product card */}
  <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img
        className="object-cover h-64 w-full"
        src={thumbnail}
        alt="Converse sneakers"
      />
    </div>
    <div className="flex flex-col gap-1 mt-4 px-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
        {name}
      </h2>
      <span className="font-normal text-gray-600 dark:text-gray-300 line-clamp-1">
       {description}
      </span>
      <span className="font-semibold text-gray-800 dark:text-gray-50">${priceOut}</span>
    </div>
    
    <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
      <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50" onClick={() => addToCart()}>
        <span className="text-base">Add to Cart</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>

    </div>
  </article>
</div>
  )
}

// map data from api 
export default function FetchProductCard () {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
       async function fetchingData(){
          const response = await fetch(`${import.meta.env.VITE_ISHOP_BASE_URL}/products`);
      const data = await response.json();
      setProduct(data.content);
        }
        fetchingData();
  },[])
  console.log(product)
  return (
   <section className="grid grid-cols-2 gap-4">

    {
      product?.map(({uuid, name, description, priceOut, thumbnail}) => (
        <ProductCartComponent
        key={uuid}
         name={name}
         description={description}
         thumbnail={thumbnail}
         priceOut={priceOut}
         addToCart={() => dispatch(addToCart({
          name, 
          priceOut,
          description,
          thumbnail
         }))}
        />
      ))
    }
   
     {/* {
     product.map(
      ({name, description, thumbnail, priceOut,uuid})=> {
        <ProductCartComponent
         key={uuid}
         name={name}
         description={description}
         thumbnail={thumbnail}
         priceOut={priceOut}
         addToCart={() => dispatch(addToCart({
          name, 
          priceOut,
          description,
          thumbnail
         }))}
        />
      }
     )} */}

   </section>

  )
}
