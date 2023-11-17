import { createSlice } from "@reduxjs/toolkit";





const userSlice = createSlice({
    name: "user",
    initialState: { value: { name: "mahdi", password: "1234566" } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})



export default userSlice.reducer

