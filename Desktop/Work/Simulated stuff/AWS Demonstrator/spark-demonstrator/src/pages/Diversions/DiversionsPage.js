import React from 'react'
import _ from "lodash"
import { dateFormat } from '../../components/utilityFuncs'

export default function DiversionsPage({diversions}) {
        
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
