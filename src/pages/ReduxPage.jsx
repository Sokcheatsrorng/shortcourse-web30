// import { useDispatch, useSelector } from "react-redux";
// import FetchProductCard from "../components/redux/ProductCartComponent";
// import { AddCartComponent } from "../components/redux/CartProductDisplay";
// import { removeFromCart } from "../features/cart/cartSlice";

import {
  useCreateNewProductMutation,
  useDeleteProductByUUIDMutation,
  useUpdateProductByUUIDMutation,
} from "../services/product";
import FetchProductCard from "../components/redux/ProductCartComponent";
import { useUserLoginMutation } from "../services/auth";

export default function ReduxPage() {
  // rtk query create product
  const [createNewProductRTK] = useCreateNewProductMutation();
  // rtk query update product by uuid
  const [updateProductByUUIDRTK] = useUpdateProductByUUIDMutation();
  // rtk query delete product by uuid
  const [deleteProductByUUIDRTK] = useDeleteProductByUUIDMutation();

  // userLogin
  const [userLoginRTK, {data}] = useUserLoginMutation();

  // mock data for create new product
  const newProductData = {
    name: "Lenovo ThinkPad X1 Carbon Gen 12",
    description:
      "Ultra-lightweight business laptop with a durable carbon-fiber chassis, MIL-SPEC tested for reliability, and a vivid WUXGA display built for all-day productivity.",
    computerSpec: {
      processor: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5x",
      storage: "512GB NVMe SSD",
      gpu: "Intel Arc Graphics",
      os: "Windows 11 Pro",
      screenSize: "14 inch WUXGA (1920x1200)",
      battery: "57Wh, up to 15 hours",
    },
    stockQuantity: 24,
    priceIn: 1050,
    priceOut: 1399,
    discount: 10,
    color: [
      {
        color: "Storm Grey",
        images: [
          "https://cdn.example.com/products/thinkpad-x1c12/storm-grey-1.jpg",
          "https://cdn.example.com/products/thinkpad-x1c12/storm-grey-2.jpg",
        ],
      },
      {
        color: "Black",
        images: ["https://cdn.example.com/products/thinkpad-x1c12/black-1.jpg"],
      },
    ],
    thumbnail:
      "https://psrefstuff.lenovo.com/syspool/Sys/Image/ThinkPad/ThinkPad_X1_Carbon_Gen_12/Compressedimage/ThinkPad_X1_Carbon_Gen_12_CT1_04.png",
    warranty: "24 months international warranty",
    availability: true,
    images: [
      "https://cdn.example.com/products/thinkpad-x1c12/main-1.jpg",
      "https://cdn.example.com/products/thinkpad-x1c12/main-2.jpg",
      "https://cdn.example.com/products/thinkpad-x1c12/main-3.jpg",
    ],
    categoryUuid: "462d9f60-8346-45ab-b8b3-a597d240965b",
    supplierUuid: "7dd85516-733b-4d47-a445-583c225fb833",
    brandUuid: "c273f461-4492-4f00-9d69-8e12d0dd9d8b",
  };

  // mock data for update
  const updateProductData = {
    name: "Dell Precision 5860 Workstation",
    description:
      "Professional-grade workstation engineered for CAD, 3D rendering, and data science workloads, with certified drivers and ISV-optimized performance.",
    stockQuantity: 3,
    priceIn: 3400,
    priceOut: 4299,
    discount: 0,
    color: [
      {
        color: "Silver",
        images: [
          "https://cdn.example.com/products/dell-precision-5860/silver-1.jpg",
          "https://cdn.example.com/products/dell-precision-5860/silver-2.jpg",
        ],
      },
    ],
    thumbnail:
      "https://media.zid.store/e4aadd21-62d3-4ecb-b286-5cfefed6d23c/75e2fa74-8cb2-4eb0-85e0-ad78e96b8a9c.png",
    warranty: "36 months ProSupport Plus",
    availability: false,
    images: ["https://cdn.example.com/products/dell-precision-5860/main-1.jpg"],
    categoryUuid: "462d9f60-8346-45ab-b8b3-a597d240965b",
    supplierUuid: "7dd85516-733b-4d47-a445-583c225fb833",
    brandUuid: "c273f461-4492-4f00-9d69-8e12d0dd9d8b",
  };

  // mock data for user login
  const userLoginData = {
    email: "sokcheatsrorng@gmail.com",
    password: "Cheat11$$",
  };

  // function user login 
  function handleUserLogin() {
    userLoginRTK({
      userLoginInfo: userLoginData
    })
  }

  if(data){
    localStorage.setItem("accessToken", data?.accessToken)
  }

  // function create new product
  function handleCreateProduct() {
    createNewProductRTK({
      newProduct: newProductData,
    });
  }

  // function update product by uuid
  function handleUpdateProductByUUID() {
    updateProductByUUIDRTK({
      uuid: "",
      updatedProduct: updateProductData,
    });
  }

  // function delete product by uuid
  function handleDeleteProductByUUID() {
    deleteProductByUUIDRTK({
      uuid: "d26faa4f-95bc-4623-9a47-59b333067e59",
    });
  }
  return (
    <div>
      <FetchProductCard />

      {/* create product */}
      <button
        className="border p-3 bg-blue-400"
        onClick={() => handleCreateProduct()}
      >
        Create Product
      </button>

      {/* update product by uuid */}
      <button
        className="border p-3 bg-yellow-400"
        onClick={() => handleUpdateProductByUUID()}
      >
        Update Product
      </button>

      {/* delete product by uuid */}
      <button
        className="border p-3 bg-red-400"
        onClick={() => handleDeleteProductByUUID()}
      >
        Delete Product
      </button>

      {/* user login function */}
      <button
        className="border p-3 bg-pink-400"
        onClick={() => handleUserLogin()}
      >
        Login
      </button>


    </div>
  );
}
