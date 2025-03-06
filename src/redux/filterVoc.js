import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filter',
    initialState: {
        partSp: "all"
    },
    reducers: {
        filterPartSp: (state, action) => {
state.partSp = action.payload
        }
    }
})

export const {filterPartSp} = slice.actions
export default slice.reducer