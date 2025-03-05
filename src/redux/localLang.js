import { createSlice } from "@reduxjs/toolkit";

export const selectLang = state => state.locale.lang
const slice = createSlice({
    name: 'locale',
    initialState: {
        lang: 'eng'
    },
    reducers: {
        changeLang: (state, action) => {
           state.lang = action.payload
// return {
//     ...state,
//     lang: action.payload
// }
        }
    }
})


export const {changeLang} = slice.actions;

export default slice.reducer