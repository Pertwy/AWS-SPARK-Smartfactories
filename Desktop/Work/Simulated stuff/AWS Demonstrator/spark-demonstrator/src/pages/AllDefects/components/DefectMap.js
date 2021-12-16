import React, {useState} from 'react'
import Modal from '../../../components/Modal'
import Defect from './Defect'

export default function DefectMap({date, defects}) {
    
    const [listModal, setListModal] = useState(false)
    
    function dateFormat(date){
        let newDate = new Date(date)
        return(newDate.toISOString().substring(0, 10))
    }

    return (
        <>
            <h3>{date}</h3>
            <button onClick={()=>setListModal(true)}>Update All Defects</button>
            <button onClick={()=>console.log(defects.filter(defect => dateFormat(defect.createdAt) === date))}>Update All Defects</button>

            <Modal modal={listModal}>
                <div className="grid eighth defect-image-wrapper">
                    {defects.filter(defect => dateFormat(defect.createdAt) === date).map(defect =><Defect data={defect}/>)}
                    <button onClick={()=>setListModal(false)}>Close</button>
                </div>
            </Modal>

            <div className="grid eighth defect-image-wrapper">
                {defects.filter(defect => dateFormat(defect.createdAt) === date).map(defect =><Defect data={defect}/>)}
            </div>
        </>
    )
}
