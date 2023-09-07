import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/home/Home';
import MasterLayouts from '../masterLayouts/MasterLayouts';
import Contact from '../Pages/Contact';


function AuthenticatedRoutes() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MasterLayouts />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/contact'} element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default AuthenticatedRoutes