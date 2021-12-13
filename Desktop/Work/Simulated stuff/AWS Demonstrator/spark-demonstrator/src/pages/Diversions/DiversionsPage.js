import React from 'react'
import _ from "lodash"

export default function DiversionsPage({diversions}) {
    

    function dateFormat(date){
        let newDate = new Date(date)
        return(newDate.toISOString().substring(0, 19).replace("T", " "))
    }
    
    return (
        <div>
            <button onClick={()=>{console.log(diversions)}}>Test</button>
            <table >
                <tr>
                    <th>Machine</th>
                    <th>Reason</th>
                    <th>Created</th>
                </tr>
                
                {diversions.map((diversion) => {
                    return(
                    <tr key={_.uniqueId()}>
                        <td>{diversion.machineName}</td>
                        <td>{diversion.reason}</td>
                        <td>{dateFormat(diversion.createdAt)}</td>
                    </tr>
                    )
                })}
            </table>
            
        </div>
    )
}
