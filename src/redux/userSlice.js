import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "../axios";

export const login = createAsyncThunk("users/login", async (user) => {
    const res = await axios.post("/auth/login", user);
    //localStorage.setItem("user",JSON.stringify(res.data));
    return res.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo:  JSON.parse(localStorage.getItem("user")) || null,
        isFetching: true,
        error: false,
    },
    reducers: {
        logout: (state) => {
            state.userInfo = null;
            state.isFetching = false
            state.error = false;
        }
    },
    extraReducers:{
        [login.pending]: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        [login.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
        },
        [login.rejected]: (state) => {
            state.pending = false;
            state.error = true;
        },
    }
});

export const { loginStart, loginSuccess, loginFailed, logout } = userSlice.actions;

export default userSlice.reducer;