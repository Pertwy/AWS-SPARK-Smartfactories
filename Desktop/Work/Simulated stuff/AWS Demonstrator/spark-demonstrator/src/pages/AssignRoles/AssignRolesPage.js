import React from 'react'
import UserDropDown from '../../components/UserDropDown'

import _ from 'lodash';
import "./assign-roles.css"

import {mockSchedule} from "../../data/mockSchedule"

export default function AssignRolesPage({machines}) {
    
    let results = {}

    function handleSaveRoles(){
        alert("Roles have been saved")
    }

    function setResults(machine, user){
        results[machine] = user
    }

    
    return (
        <>
            <div className="table">
                <table >
                    <tr>
                        <th>Machine</th>
                        <th>Set Operator</th>
                    </tr>
                    
                    {machines.map(({name}) => {
                        return(
                        <tr key={_.uniqueId()}>
                            <td>{name}</td>
                            <td><UserDropDown machine={name} setResults={setResults}/></td>
                        </tr>
                        )
                    })}

                    
                </table>
                <button onClick={()=>{handleSaveRoles()}}>Save</button>

                <div className="schedule">
                    <h3>Schedule</h3>
                    {mockSchedule.map((element) => {
                        return(
                        <div className="row">
                            <h4>{element.machine}</h4>
                            <p>-  {element.operator}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
