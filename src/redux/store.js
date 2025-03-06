import { configureStore } from "@reduxjs/toolkit"

import { persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import langReducer from './localLang'
import vocReduce from './vocabulary'
import filterReducer from './filterVoc'


const persistConfig = {
    key: 'words',
    storage,
    whitelist: ['words']
  }
   
  const persisteVocdReducer = persistReducer(persistConfig, vocReduce)

export const store = configureStore({reducer: {locale: langReducer,
    vocabulary: persisteVocdReducer,
    vocFilter: filterReducer,
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),})

export const persistor = persistStore(store)