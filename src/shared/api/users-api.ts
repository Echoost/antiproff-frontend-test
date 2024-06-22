import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_API } from '../const/auth';
import { Users } from './type';

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: AUTH_API.SERVER_URL,
    }),
    reducerPath: 'usersApi',
    endpoints: build => ({
        getUsers: build.query<Users, number>({
            query: countOfPage => ({
                url: `/users?page=1&per_page=${countOfPage}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi;
