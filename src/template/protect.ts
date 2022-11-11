export const protect = `
import React from 'react'
import moment from 'moment'
import { Navigate, Outlet } from 'react-router'


const ProtectedRouter = () => {
  const tokenAccess = localStorage.getItem('tokenAccess')
  const expired = localStorage.getItem('expired')
  const agora = moment().unix()
  if (tokenAccess && agora <= Number(expired)) {
      return <Outlet />
  } else {
    return <Navigate to={'/login'} />
    }
}`