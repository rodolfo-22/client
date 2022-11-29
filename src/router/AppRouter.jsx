import React from 'react'
import {useState, useEffect} from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/LoginPage'
import UsersRoutes from './UsersRoutes'
import UserServices from '../Services/UserServices'


const AppRouter = () => {

  const verifyToken = UserServices.verifyToken;
  const [token, setToken] = useState(localStorage.getItem('token') || undefined);
  const [role, setRole] = useState(localStorage.getItem('role') || undefined);
  const [username, setUserName] = useState(undefined);

  useEffect(() => {
      async function getUser(){
          if(token){
              localStorage.setItem('token', token);
              if(!role || !username){
                  const user = await verifyToken(token);
                  localStorage.setItem('role', user.role);
                  setRole(user.role); 
                  setUserName(user.username);
              }
          }else{
              setRole(undefined);
          }
      }

      getUser();
  }, [token])

  return (
    <>
    <Routes>
    
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<UsersRoutes />} />

    </Routes> 
    </>
  )
}

export default AppRouter



