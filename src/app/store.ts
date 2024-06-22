import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { registerApi } from '../shared/api/registration-api';
import { usersApi } from '../shared/api/users-api';
import { singleUserApi } from '../shared/api/single-user-api';
import authorizationReducer from '../shared/slices/authorization-slice';
import favouritesSlice from '../shared/slices/favourites-slice';

const rootReducer = combineSlices({
    [registerApi.reducerPath]: registerApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [singleUserApi.reducerPath]: singleUserApi.reducer,
    authorization: authorizationReducer,
    favouriteList: favouritesSlice,
});

const middleware = [
    registerApi.middleware,
    usersApi.middleware,
    singleUserApi.middleware,
];

export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(middleware);
    },
});
