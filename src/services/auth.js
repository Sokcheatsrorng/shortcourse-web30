import { ecommerceApi } from "./api";

export const authService = ecommerceApi.injectEndpoints({

   endpoints: (builder) => ({
      userLogin: builder.mutation({
        query: ({userLoginInfo}) => ({
           method: 'POST',
           url: `/auth/login`,
           body: userLoginInfo
        })
      })
   })
})

export const {
  useUserLoginMutation
} = authService;