import {createSlice, SliceCaseReducers, PayloadAction} from "@reduxjs/toolkit";

interface ContadorState {
    valor : number
}
interface ContadorReduces extends SliceCaseReducers<ContadorState>{
    incrementa : (state:ContadorState, action:PayloadAction<number>) => void
    decrementa : (state:ContadorState, action:PayloadAction<number>) => void
}
const contadorSlice = createSlice<ContadorState,ContadorReduces>({
    name: "contador",
    initialState: {
        valor: 1
    },
    reducers: {
        incrementa(state:ContadorState, action:PayloadAction<number>){
            console.log(action.type)
            state.valor += action.payload;
        },
        decrementa(state:ContadorState, action:PayloadAction<number>){
            state.valor -= action.payload;
        }
    }
});

export const { incrementa, decrementa } = contadorSlice.actions;
export default contadorSlice.reducer;