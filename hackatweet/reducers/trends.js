import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const trendsSlice = createSlice({
    name: 'trends',
    initialState,
    reducers: {
        addTrend: (state, action) => {
            state.value.push(action.payload);
        }
    },
})

export const { addTrend } = trendsSlice.actions;
export default trendsSlice.reducer;