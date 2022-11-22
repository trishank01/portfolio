import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginedIn : false,
    registerUserEmail : null,
    LoginStatus : localStorage.getItem("LoginStatus") ? JSON.parse(localStorage.getItem("LoginStatus")) : [],
}

const authSlice = createSlice({
    name : "auth",
    initialState ,
    reducers : {
        REGISTER_USER_Email : (state , action) => {
             state.registerUserEmail = action.payload
             state.isLoginedIn = true
             state.LoginStatus = true 
             localStorage.setItem("LoginStatus" , JSON.stringify(state.LoginStatus))
        },
        LOGOUT_USER : (state , action) => {
            state.registerUserEmail = null
            state.isLoginedIn = false
            state.LoginStatus = false
            localStorage.setItem("LoginStatus" , JSON.stringify(state.LoginStatus))
       }
    }
})

export const {REGISTER_USER_Email , LOGOUT_USER} = authSlice.actions

export const SelectRegisterUser = (state) => state.auth.registerUserEmail
export const selectLoginStatus = (state) => state.auth.LoginStatus
export const SelectIsLoginedIn = (state) => state.auth.isLoginedIn

export default authSlice.reducer