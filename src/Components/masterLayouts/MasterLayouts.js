import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';


function MasterLayouts() {
  return (
    <div className='layoutWrapper'>
        <Header />
        <>
        <p>lkl;k;lk;lk;k;l</p>
        <p>lkl;k;lk;lk;k;l</p>
        <p>lkl;k;lk;lk;k;l</p>
        <p>lkl;k;lk;lk;k;l</p>
        <p>lkl;k;lk;lk;k;l</p>
        <p>lkl;k;lk;lk;k;l</p>
        </>
            <Outlet />
        <Footer />
    </div>
  )
}

export default MasterLayouts