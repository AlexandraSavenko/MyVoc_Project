import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
name: 'newWords',
initialState: {
    words: []
},
reducers: {
    addWord: (state, action) => {
        state.words.push(action.payload)
    }
}
})

export const {addWord} = slice.actions;
export default slice.reducer