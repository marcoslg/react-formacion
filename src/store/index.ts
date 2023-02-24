import { configureStore } from "@reduxjs/toolkit";
import contadorSlice from "features/contador/ContadorSlice";

const store = configureStore({
    reducer: contadorSlice
});
export type RootState = ReturnType<typeof store.getState>
export default store;