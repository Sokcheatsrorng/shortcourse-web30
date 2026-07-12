
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// rtk query api : createApi, fetchBaseQuery
export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_ISHOP_BASE_URL
  }),
  endpoints: (builder)=>({
    // all endpoints will operate here (CRUD)
    getAllProducts: builder.query({
      query: () => `/products?page=0&size=1000`
    }),
    getSingleProductByUUID: builder.query({
      query: (uuid) => `/products/${uuid}`
    }),
    // create new product 
    createNewProduct: builder.mutation({
      query: ({newProduct,accessToken})=> ({
         url: `/products`,
         method: 'POST',
         headers: {
           'content-type': 'application/json',
           'authorization': `bearer ${accessToken}`
         },
         body: newProduct
      })
    }),
    // update product by uuid
    updateProductByUUID: builder.mutation({
      query: ({updatedProduct,accessToken,uuid})=> ({
         url: `/products/${uuid}`,
         method: 'PUT',
         headers: {
           'content-type': 'application/json',
           'authorization': `bearer ${accessToken}`
         },
         body: updatedProduct
      })
    }),

    // delete product by uuid 
     deleteProductByUUID: builder.mutation({
      query: ({accessToken,uuid})=> ({
         url: `/products/${uuid}`,
         method: 'DELETE',
         headers: {
           'content-type': 'application/json',
           'authorization': `bearer ${accessToken}`
         }
      })
    }),
  })
})
export const {
  useGetAllProductsQuery,
  useGetSingleProductByUUIDQuery,
  useCreateNewProductMutation,
  useUpdateProductByUUIDMutation,
  useDeleteProductByUUIDMutation
} = ecommerceApi;

