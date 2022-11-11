export const router = `
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProtectedRouter from './protectedRouter'
import { App } from '../app'


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path='/' element={<App />}/>
        </Route>
        <Route path='/login' element={
            <div>Login</div>
          } />
      </Routes>
      </BrowserRouter>
  )
}
`