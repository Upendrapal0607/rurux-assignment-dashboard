import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Components/Login'
import { DashboardPage } from '../Pages/DashboardPage';
import { useSelector } from 'react-redux';

export const AllRoute = () => {
  const Data = useSelector((state) => state.OtherReducer);
  return (
    <div>
        <Routes>
            <Route path='/' element = {Data?.isAuth ? <DashboardPage /> : <Login />} />
        </Routes>
    </div>
  )
}
