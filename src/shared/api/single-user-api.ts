import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_API } from '../const/auth';
import { Users } from './type';

export const singleUserApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: AUTH_API.SERVER_URL,
    }),
    reducerPath: 'singleUserApi',
    endpoints: build => ({
        getUser: build.query<Users, string>({
            query: id => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetUserQuery } = singleUserApi;
