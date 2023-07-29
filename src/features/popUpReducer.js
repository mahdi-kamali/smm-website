import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    value: {
        type: "none",
        duration: "infinite",
        resultFunction: () => { }
    }
}


export const popUpSlice = createSlice({
    name: "popUp",
    initialState,
    reducers: {
        showPopUp: (state, actions) => {
            state.value = actions.payload
        },
        closePopUp(state) {
            state.value = initialState.value
        }
    }
})


export default popUpSlice.reducer

export const { showPopUp, closePopUp } = popUpSlice.actions