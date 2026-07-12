import { useDispatch, useSelector } from "react-redux";
import FetchProductCard from "../components/redux/ProductCartComponent";
import { AddCartComponent } from "../components/redux/CartProductDisplay";
import { removeFromCart } from "../features/cart/cartSlice";

export default function ReduxPage() {
   
  const totalPrice = useSelector((state)=> state.cart.totalPrice);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  console.log(`==> Total Price: ${totalPrice}`)
  console.log(`products: ${products}`)
  const [product] = products;
  console.log(product)

  return (
    <div className="grid grid-cols-2">
      <FetchProductCard/>

      {/* display addToCart Result */}
    <section className=" w-full h-[700px] relative bg-white dark:bg-[#0A2025] ">
  <div className="bg-white flex flex-col h-full absolute right-0 p-10 w-[450px]">
    <div className="flex items-center mb-3 justify-between ">
      <h2 className="text-[#191919] text-xl font-medium leading-[30px]">
        Shopping Card (2)
      </h2>
      <svg
        width={45}
        height={45}
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22.5" cy="22.5" r="22.5" fill="white" 
        onClick={()=> dispatch(removeFromCart(products))}
        />
        <path
          d="M28.75 16.25L16.25 28.75"
          stroke="#1A1A1A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.25 16.25L28.75 28.75"
          stroke="#1A1A1A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
      {
        products.map((d)=> (
           <AddCartComponent
              key={d.uuid}
              title={d.name}
              thumbnail={d.thumbnail}
              priceOut={d.priceOut}
           />

        ))
      }
       <div className="mt-auto">
      <div className=" py-6 bg-white flex justify-between items-center">
        <span className="relative justify-start text-[#191919] text-base font-normal  leading-normal">
          2 Product
        </span>
        <span className="relative justify-start text-[#191919] text-base font-semibold  leading-tight">
          ${totalPrice}
        </span>
      </div>
      <button className="w-full px-10 py-4 bg-[#00b206] rounded-[43px]     text-white text-base font-semibold  leading-tight">
        Checkout
      </button>
      <button className="w-[376px] mt-3 px-10 py-4 bg-[#56ac59]/10 rounded-[43px]   text-[#00b206] text-base font-semibold  leading-tight">
        Go To Cart
      </button>
    </div>
  </div>
</section>     
    </div>
  );
}
