

import { ecommerceApi } from './api';
// rtk query api : createApi, fetchBaseQuery
export const productService = ecommerceApi.injectEndpoints({
  
  endpoints: (builder)=>({
    // all endpoints will operate here (CRUD)
    getAllProducts: builder.query({
      query: () => `/products?page=0&size=1000`,
      providesTags: ["Products"]
    }),
    getSingleProductByUUID: builder.query({
      query: (uuid) => `/products/${uuid}`,
      providesTags:["Product"]
    }),
    // create new product 
    createNewProduct: builder.mutation({
      query: ({newProduct})=> ({
         url: `/products`,
         method: 'POST',
         body: newProduct
      }),
      invalidatesTags:["Products"]
    }),
    // update product by uuid
    updateProductByUUID: builder.mutation({
      query: ({updatedProduct,uuid})=> ({
         url: `/products/${uuid}`,
         method: 'PUT',
         body: updatedProduct
      }),
       invalidatesTags: (result, error, arg) => [{ type: 'Products', id: arg.uuid }]
    }),

    // delete product by uuid 
     deleteProductByUUID: builder.mutation({
      query: ({uuid})=> ({
         url: `/products/${uuid}`,
         method: 'DELETE',
      })
    }),
    invalidatesTags: (result, error, arg) => [{ type: 'Products', uuid: arg.uuid }]
  })
})
export const {
  useGetAllProductsQuery,
  useGetSingleProductByUUIDQuery,
  useCreateNewProductMutation,
  useUpdateProductByUUIDMutation,
  useDeleteProductByUUIDMutation
} = productService;

