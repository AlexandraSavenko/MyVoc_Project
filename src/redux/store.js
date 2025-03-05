import { configureStore } from "@reduxjs/toolkit"

import langReducer from './localLang'
// import { changeLang } from "./localLang"
// const initState = {
//     local: {
//         lang: 'en'
//     }
// }

// export const changeLang = createAction('local/changeLang')

// const rootReducer = (state = initState, action) => {
//     console.log(action)
// switch (action.type) {
//     case 'local/changeLang':
//         return {
//             ...state, local: {lang: action.payload}
//         }

//     default: return state;
// }
// }

export const store = configureStore({reducer: {locale: langReducer}})