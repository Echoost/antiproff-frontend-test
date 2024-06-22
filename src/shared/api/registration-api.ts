import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_API } from '../const/auth';

export const registerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: AUTH_API.SERVER_URL,
    }),
    reducerPath: 'registerApi',
    endpoints: build => ({
        registerUser: build.mutation({
            query: params => ({
                url: '/register',
                method: 'POST',
                body: params,
            }),
        }),
    }),
});

export const { useRegisterUserMutation } = registerApi;
