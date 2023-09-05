import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import MasterLayouts from '../masterLayouts/MasterLayouts';


function AuthenticatedRoutes() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<MasterLayouts />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default AuthenticatedRoutes