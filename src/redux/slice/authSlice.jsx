import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginedIn : false,
    registerUserEmail : null,
    LoginStatus : localStorage.getItem("LoginStatus") ? JSON.parse(localStorage.getItem("LoginStatus")) : [],
    userDisplayName : ""
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
       },
       USER_DISPLAY_NAME : (state ,action) => {
        console.log(action)
       }
    }
})

export const {REGISTER_USER_Email , LOGOUT_USER , USER_DISPLAY_NAME} = authSlice.actions

export const SelectRegisterUser = (state) => state.auth.registerUserEmail
export const selectLoginStatus = (state) => state.auth.LoginStatus
export const SelectIsLoginedIn = (state) => state.auth.isLoginedIn
export const SelectUserDisplayName = (state) => state.auth.userDisplayName

export default authSlice.reducer