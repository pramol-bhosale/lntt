import React from 'react';
import PSidebar, { Sidebar2 } from './Sidebar';
import Header from './Header';
import style from './style.css';

function BaseTemplate({children}) {
  return (
    <div className='row g-0 basetemplate-container'>
        <div className="col-2 vh-100">
            <PSidebar/>
        </div>
        <div className="col-10">
            <Header/>
            <div className="col-12 basetemplate-children-container p-3 pt-5 mt-5">
             {children}
            </div>
             <div className="col-12 row g-0 p-2 py-3 mt-5 basetemplate-children-footer">
             2023 © All Rights are Reserved Master.
             </div>
        </div>
    </div>
  )
}

export default BaseTemplate