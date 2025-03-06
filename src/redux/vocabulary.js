import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
name: 'newWords',
initialState: {
    words: []
},
reducers: {
    addWord: (state, action) => {
        state.words.push(action.payload)
    },
    deleteWord: (state, action) => {
       state.words = state.words.filter(el => el.id != action.payload)
    }
}
})

export const {addWord, deleteWord} = slice.actions;
export default slice.reducer