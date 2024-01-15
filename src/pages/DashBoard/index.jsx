import React from 'react'
import BaseTemplate from '../../Layout/BaseTemplate'
import style from './style.css'
import SaleMiniWidget from './SaleMiniWidget'
import PurchaseMiniWidget from './PurchaseMiniWidget'
import DataAnalysisWidget from './DataAnalysisWidget'
import Chart from './Chart'
import RecentTransaction from './RecentTransaction'
function Dashboard() {
    return (
        <BaseTemplate>
            <div className="row g-0 dashboard-container">
                <div className="col-12">
                    <h4 className='dashboard-heading'>Dashboard</h4>
                </div>
                <div className="row g-0 justify-content-between align-items-start">
                    <div className="col-9 row g-0 pe-2">
                        <div className="col-12 row g-0">
                            <div className="col-6 p-1 "><SaleMiniWidget /></div>
                            <div className="col-6 p-1"><PurchaseMiniWidget /></div>
                        </div>
                        <div className="col-12 row g-0 mt-4 justify-content-between">
                            {/* <div className="col-4 p-1 "><SaleMiniWidget /></div> */}
                            <div className="col-12 p-3 dashboard_chart-container rounded-3"><Chart /></div>
                        </div>
                        <div className="col-12 mt-4">
                           <RecentTransaction/>
                        </div>
                    </div>
                    <div className="col-3 px-2 row g-0 border-left">
                        <div className="col-12">
                            <DataAnalysisWidget />
                        </div>
                    </div>
                </div>
            </div>
        </BaseTemplate>
    )
}

export default Dashboard