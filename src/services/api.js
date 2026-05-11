import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiservice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: ({ category, limit, skip }) => {
                return `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`
            }
        }),
        getCategoryList: build.query({
            query: () => "/products/category-list",
        }),
        getProductDetails: build.query({
            query: (id) => `/products/${id}`,
        }),
        searchProducts: build.query({
            query: (search) => `/products/search?q=${search}`,
        }),
        login: build.mutation({
            query: (credentials) => ({
                url: `/auth/login`,
                method: 'POST',
                body: credentials,
            }),
        }),
        // ✅ নতুন — Registration এর জন্য
        addUser: build.mutation({
            query: (userData) => ({
                url: `/users/add`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: userData,
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetCategoryListQuery,
    useGetProductDetailsQuery,
    useLoginMutation,
    useLazySearchProductsQuery,
    useAddUserMutation, // ✅ নতুন export
} = apiservice
