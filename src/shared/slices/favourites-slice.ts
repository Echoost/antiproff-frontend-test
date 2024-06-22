import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { FavouriteList } from '../../app/type';

const loadState = (): FavouriteList[] => {
    try {
        const serializedState = localStorage.getItem('favouriteList');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return [];
    }
};

export const favouritesSlice = createSlice({
    name: 'favouriteList',
    initialState: loadState(),
    reducers: {
        changeFavouritesStatus(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingCard = state.find(
                (card: FavouriteList) => card.id === id,
            );
            if (!existingCard) {
                state.push({ id: id });
            } else {
                return state.filter((card: FavouriteList) => card.id !== id);
            }
            localStorage.setItem('favouriteList', JSON.stringify(state));
        },
    },
});

export const { changeFavouritesStatus } = favouritesSlice.actions;

export default favouritesSlice.reducer;
