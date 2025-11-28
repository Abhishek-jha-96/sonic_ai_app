import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { storage } from '../../utils/storage';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_SERVER_BASE_URL,
    prepareHeaders: async (headers) => {
        const token = await storage.getToken();
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshToken = await storage.getRefreshToken();
                if (refreshToken) {
                    const refreshResult = await baseQuery(
                        {
                            url: '/auth/refresh-token',
                            method: 'POST',
                            body: { refreshToken },
                        },
                        api,
                        extraOptions
                    );

                    if (refreshResult.data) {
                        const { accessToken, refreshToken: newRefreshToken } = refreshResult.data as { accessToken: string; refreshToken: string };
                        await storage.setToken(accessToken);
                        await storage.setRefreshToken(newRefreshToken);

                        // Retry the initial query
                        result = await baseQuery(args, api, extraOptions);
                    } else {
                        // Refresh failed, logout user
                        await storage.clearAll();
                        // You might want to dispatch a logout action here if you have one
                    }
                } else {
                    // No refresh token, logout
                    await storage.clearAll();
                }
            } finally {
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const { accessToken, refreshToken } = data as { accessToken: string; refreshToken: string };
                    await storage.setToken(accessToken);
                    await storage.setRefreshToken(refreshToken);
                } catch (err) {
                    console.error('Login failed', err);
                }
            },
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),
        }),
        // Add other endpoints here
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
