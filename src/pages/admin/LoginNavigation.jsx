import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectIsLoginedIn, SelectRegisterUser } from '../../redux/slice/authSlice'




export const LoginNavigation = ({children}) => {
    const userLoginedIn = useSelector(SelectIsLoginedIn)
    if(userLoginedIn){
        return children
    }
    return null
}

export const LogoutNavigation = ({children}) => {
    const userLoginedIn = useSelector(SelectRegisterUser)
    if(!userLoginedIn){
        return children
    }
    return null
}



