import { combineReducers, configureStore } from "@reduxjs/toolkit";
import templateSlice from "./slices/templateSlice";
import accountSlice from "./slices/accountSlice";

const rootReducer = combineReducers({
    template: templateSlice,
    account: accountSlice
})

export const makeStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']