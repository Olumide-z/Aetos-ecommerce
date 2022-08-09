import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    photo: ''
}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.photo = action.payload
        }
    }
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;