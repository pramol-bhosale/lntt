import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import style from './style.css';

function BaseTemplate({children}) {
  return (
    <div className='row g-0 '>
        <div className="col-2">
            <Sidebar/>
        </div>
        <div className="col-10">
            <Header/>
            <div className="col-12 basetemplate-children-container p-3 pt-4">
             {children}
            </div>
        </div>
    </div>
  )
}

export default BaseTemplate