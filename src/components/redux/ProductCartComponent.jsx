// import { useDispatch } from "react-redux";
// import { addToCart } from "../../features/cart/cartSlice";
import {
  useDeleteProductByUUIDMutation,
  useGetAllProductsQuery,
} from "../../services/product";

export function ProductCartComponent({
  name,
  description,
  thumbnail,
  priceOut,
  deleteProduct,
  uuid,
}) {
  return (
    <div className="h-screen w-full flex items-center justify-center  ">
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
          <h1>UUID: {uuid}</h1>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
            {name}
          </h2>
          <span className="font-normal text-gray-600 dark:text-gray-300 line-clamp-1">
            {description}
          </span>
          <span className="font-semibold text-gray-800 dark:text-gray-50">
            ${priceOut}
          </span>
        </div>

        <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
          <button
            className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50"
            onClick={() => deleteProduct(uuid)}
          >
            <span className="text-base text-red-500">Delete Product</span>
          </button>
        </div>
      </article>
    </div>
  );
}

// map data from api
export default function FetchProductCard() {
  //  use hook from rtk query
  const { data, isLoading, error } = useGetAllProductsQuery();
  console.log(`==> data : `, data);
  console.log(isLoading);
  console.log(error);
  // rtk query delete product by uuid
  const [deleteProductByUUIDRTK] = useDeleteProductByUUIDMutation();
  // const dispatch = useDispatch();

  function handleDeleteProductByUUID(uuid) {
    deleteProductByUUIDRTK({
      uuid: uuid,
      accessToken: import.meta.env.VITE_ISHOP_ACESSTOKEN,
    });
  }

  return (
    <section className="grid grid-cols-4 gap-4">
      {data?.content.map(({ uuid, name, description, priceOut, thumbnail }) => (
        <ProductCartComponent
          key={uuid}
          name={name}
          uuid={uuid}
          description={description}
          thumbnail={thumbnail}
          priceOut={priceOut}
          deleteProduct={() => handleDeleteProductByUUID(uuid)}
          //  addToCart={() => dispatch(addToCart({
          //   name,
          //   priceOut,
          //   description,
          //   thumbnail
          //  }))}
        />
      ))}
    </section>
  );
}
