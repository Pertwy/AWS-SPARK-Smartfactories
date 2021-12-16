import React from 'react'
import "./components/defects.css"
import DefectMap from './components/DefectMap';


export default function AllDefectsPage({defects}) {
    
    function dateFormat(date){
        let newDate = new Date(date)
        return(newDate.toISOString().substring(0, 10))
    }

    function getSet(defects){
        let mySet = new Set()
        defects.forEach(defect => mySet.add(dateFormat(defect.createdAt)))
        let myArray = Array.from(mySet);
        return myArray
    }

    return (
        <div >
            {/* DefectMap had to be abstracted into its own component so that it could have its 
            own State - This is so a different modal can be opened for each date */}
            {getSet(defects).map(date => <DefectMap date={date} defects={defects}/>)}
        </div>
    )
}
