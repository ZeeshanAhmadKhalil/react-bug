import { createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        loader: false,
    },
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload
        }
    },
    extraReducers: (builder) => {
    },
});

export const {
    setLoader,
} = sharedSlice.actions;

export default sharedSlice.reducer;