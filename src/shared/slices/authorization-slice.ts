import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuthorizated: false };

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        changeAuthorizationStatus(state, action) {
            state.isAuthorizated = action.payload;
        },
    },
});

export const { changeAuthorizationStatus } = authorizationSlice.actions;

export default authorizationSlice.reducer;
