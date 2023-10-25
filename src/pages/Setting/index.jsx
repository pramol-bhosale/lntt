import React from 'react'
import BaseTemplate from '../../Layout/BaseTemplate'
import style from './style.css'
import { GearSix } from '@phosphor-icons/react'
function SettingPage() {
  return (
    <BaseTemplate>
      <div className="row g-0 setting-container">
        <div className="col-12 mb-5">
          <GearSix fontSize={32} weight='fill' /> <span className='setting-main-heading'>Setting</span>
        </div>
        <div className="col-2 border-end setting-sidebar-container">
          <div className="row g-0">
            <div className="col-12 setting-tabs setting-tabs-active p-2">
              APP Settings
            </div>
            <div className="col-12 setting-tabs">
              Bill Setup
            </div>
            <div className="col-12 setting-tabs">
              Data Backup
            </div>
          </div>
        </div>
        <div className="col-8 row g-0 setting-main-container p-2">
               
        </div>
      </div>
    </BaseTemplate>
  )
}

export default SettingPage