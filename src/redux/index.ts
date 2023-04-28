import { combineReducers } from "redux";
import { tasks } from "./tasks";
import logger from 'redux-logger';
import { persistReducer } from "redux-persist";
import session from "redux-persist/lib/storage/session";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage: session,
    whitelist: ['tasks'],
}

const combinedReducer = combineReducers({ tasks: tasks.reducer });

const rootReducer = persistReducer(persistConfig, combinedReducer);

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger],
    devTools: true
})

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof store.getState>;

// yarn add redux-logger
// yarn add @types/redux-logger
// 상태가 변경될 때 console에 로그를 출력해주는 middelware 라이브러리 (디버깅 툴)
//
// yarn add redux-devtools-extension
//
//
// 상태가 localStorage나 sessionStorage를 통해 남아 있을 수 있도록 도와주는 middleware 라이브러리
// yarn add redux-persist
// yarn add @types/redux