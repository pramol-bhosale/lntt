import React, { useEffect, useState } from 'react'
import { modalMap } from './Data'

function PopUp({code}) {
    const [data, setData] = useState(null)
    useEffect(()=>{
     const foundModalInfo = modalMap.filter(data=> data.code === code)
     if(foundModalInfo.length > 0){
        setData(foundModalInfo.at(0).data)
     }else{
        setData(null)
     }
    },[code])
    return (
        data === null ? <></> : (
            <div className={`modal fade ${data?.classNames} `} id="confirmModal" tabindex="-1" aria-labelledby="confirmModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="confirmModal">{data?.header}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {data?.body}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={data?.CTAButtons.classNames} >{data?.CTAButtons.name}</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
                    </div>
                </div>
            </div>
        </div>
        )
    )
}

export default PopUp