// import { useDispatch, useSelector } from "react-redux";
// import FetchProductCard from "../components/redux/ProductCartComponent";
// import { AddCartComponent } from "../components/redux/CartProductDisplay";
// import { removeFromCart } from "../features/cart/cartSlice";

import { useCreateNewProductMutation, useDeleteProductByUUIDMutation, useUpdateProductByUUIDMutation } from "../services/ecommerce";
import {ProductCartComponent} from '../components/redux/ProductCartComponent'

export default function ReduxPage() {

  // rtk query create product 
  const [createNewProductRTK, {data}] = useCreateNewProductMutation();
  // rtk query update product by uuid
  const [updateProductByUUIDRTK] = useUpdateProductByUUIDMutation();
  // rtk query delete product by uuid
  const [deleteProductByUUIDRTK] = useDeleteProductByUUIDMutation();


  // mock data for create new product
  const newProductData = {
    "name": "Lenovo ThinkPad X1 Carbon Gen 12",
    "description": "Ultra-lightweight business laptop with a durable carbon-fiber chassis, MIL-SPEC tested for reliability, and a vivid WUXGA display built for all-day productivity.",
    "computerSpec": {
      "processor": "Intel Core Ultra 7 155H",
      "ram": "16GB LPDDR5x",
      "storage": "512GB NVMe SSD",
      "gpu": "Intel Arc Graphics",
      "os": "Windows 11 Pro",
      "screenSize": "14 inch WUXGA (1920x1200)",
      "battery": "57Wh, up to 15 hours"
    },
    "stockQuantity": 24,
    "priceIn": 1050,
    "priceOut": 1399,
    "discount": 10,
    "color": [
      {
        "color": "Storm Grey",
        "images": [
          "https://cdn.example.com/products/thinkpad-x1c12/storm-grey-1.jpg",
          "https://cdn.example.com/products/thinkpad-x1c12/storm-grey-2.jpg"
        ]
      },
      {
        "color": "Black",
        "images": [
          "https://cdn.example.com/products/thinkpad-x1c12/black-1.jpg"
        ]
      }
    ],
    "thumbnail": "https://psrefstuff.lenovo.com/syspool/Sys/Image/ThinkPad/ThinkPad_X1_Carbon_Gen_12/Compressedimage/ThinkPad_X1_Carbon_Gen_12_CT1_04.png",
    "warranty": "24 months international warranty",
    "availability": true,
    "images": [
      "https://cdn.example.com/products/thinkpad-x1c12/main-1.jpg",
      "https://cdn.example.com/products/thinkpad-x1c12/main-2.jpg",
      "https://cdn.example.com/products/thinkpad-x1c12/main-3.jpg"
    ],
    "categoryUuid": "462d9f60-8346-45ab-b8b3-a597d240965b",
    "supplierUuid": "7dd85516-733b-4d47-a445-583c225fb833",
    "brandUuid": "c273f461-4492-4f00-9d69-8e12d0dd9d8b"
  }
  
  // mock data for update 
  const updateProductData =   { 
  "name": "Dell Precision 5860 Workstation",
    "description": "Professional-grade workstation engineered for CAD, 3D rendering, and data science workloads, with certified drivers and ISV-optimized performance.",
    "stockQuantity": 3,
    "priceIn": 3400,
    "priceOut": 4299,
    "discount": 0,
    "color": [
      {
        "color": "Silver",
        "images": [
          "https://cdn.example.com/products/dell-precision-5860/silver-1.jpg",
          "https://cdn.example.com/products/dell-precision-5860/silver-2.jpg"
        ]
      }
    ],
    "thumbnail": "https://media.zid.store/e4aadd21-62d3-4ecb-b286-5cfefed6d23c/75e2fa74-8cb2-4eb0-85e0-ad78e96b8a9c.png",
    "warranty": "36 months ProSupport Plus",
    "availability": false,
    "images": [
      "https://cdn.example.com/products/dell-precision-5860/main-1.jpg"
    ],
    "categoryUuid": "462d9f60-8346-45ab-b8b3-a597d240965b",
    "supplierUuid": "7dd85516-733b-4d47-a445-583c225fb833",
    "brandUuid": "c273f461-4492-4f00-9d69-8e12d0dd9d8b"
}

// function create new product
  function handleCreateProduct() {
    createNewProductRTK(
      {
        newProduct: newProductData,
        accessToken: import.meta.env.VITE_ISHOP_ACESSTOKEN
      }
    )
  }

  // function update product by uuid
  function handleUpdateProductByUUID() {
    updateProductByUUIDRTK({
      uuid: "b0ac6131-2ad3-4f4b-87c2-0bc02684fb58",
      updatedProduct: updateProductData,
      accessToken: import.meta.env.VITE_ISHOP_ACESSTOKEN
    })
  }

  // function delete product by uuid 
  function handleDeleteProductByUUID(){
    deleteProductByUUIDRTK({
      uuid: "83023cb6-4d89-4582-ba49-d27b654d2e54",
      accessToken: import.meta.env.VITE_ISHOP_ACESSTOKEN
    })
  }
  return (
    <div>

     {
        data?(
           <ProductCartComponent
        name={data?.name}
        thumbnail={data?.thumbnail}
        description={data?.description}
        priceOut={data?.priceOut}
      />
        ):(
          <h1>No Data </h1>
        )
     }

      {/* create product */}
      <button className="border p-3 bg-blue-400" onClick={() => handleCreateProduct()}>Create Product</button>

      {/* update product by uuid */}
       <button className="border p-3 bg-yellow-400" onClick={() => handleUpdateProductByUUID()}>Update Product</button>

       {/* delete product by uuid */}
        <button className="border p-3 bg-red-400" onClick={() => handleDeleteProductByUUID()}>Delete Product</button>

    </div>
//     <div className="grid grid-cols-2">
//       <FetchProductCard/>

//       {/* display addToCart Result */}
//     <section className=" w-full h-[700px] relative bg-white dark:bg-[#0A2025] ">
//   <div className="bg-white flex flex-col h-full absolute right-0 p-10 w-[450px]">
//     <div className="flex items-center mb-3 justify-between ">
//       <h2 className="text-[#191919] text-xl font-medium leading-[30px]">
//         Shopping Card (2)
//       </h2>
//       <svg
//         width={45}
//         height={45}
//         viewBox="0 0 45 45"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle cx="22.5" cy="22.5" r="22.5" fill="white" 
//         onClick={()=> dispatch(removeFromCart(products))}
//         />
//         <path
//           d="M28.75 16.25L16.25 28.75"
//           stroke="#1A1A1A"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M16.25 16.25L28.75 28.75"
//           stroke="#1A1A1A"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//       {
//         products.map((d)=> (
//            <AddCartComponent
//               key={d.uuid}
//               title={d.name}
//               thumbnail={d.thumbnail}
//               priceOut={d.priceOut}
//            />

//         ))
//       }
//        <div className="mt-auto">
//       <div className=" py-6 bg-white flex justify-between items-center">
//         <span className="relative justify-start text-[#191919] text-base font-normal  leading-normal">
//           2 Product
//         </span>
//         <span className="relative justify-start text-[#191919] text-base font-semibold  leading-tight">
//           ${totalPrice}
//         </span>
//       </div>
//       <button className="w-full px-10 py-4 bg-[#00b206] rounded-[43px]     text-white text-base font-semibold  leading-tight">
//         Checkout
//       </button>
//       <button className="w-[376px] mt-3 px-10 py-4 bg-[#56ac59]/10 rounded-[43px]   text-[#00b206] text-base font-semibold  leading-tight">
//         Go To Cart
//       </button>
//     </div>
//   </div>
// </section>     
//     </div>
  );
}
