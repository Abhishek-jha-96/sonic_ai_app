import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const googleAuthApi = createApi({
    reducerPath: 'googleAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com' }),
    endpoints: (builder) => ({
        getUserInfo: builder.query<any, string>({
            query: (accessToken) => ({
                url: '/userinfo/v2/me',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
        }),
    }),
});

export const { useLazyGetUserInfoQuery } = googleAuthApi;
