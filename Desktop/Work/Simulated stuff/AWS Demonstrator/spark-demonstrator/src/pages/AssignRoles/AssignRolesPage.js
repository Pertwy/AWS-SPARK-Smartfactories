import React, {useState} from 'react'
import UserDropDown from '../../components/UserDropDown'

import _ from 'lodash';
import "./assign-roles.css"

import {mockSchedule} from "../../data/mockSchedule"

export default function AssignRolesPage({machines}) {
    
    // let results = {}
    const [results, setResults] = useState([])

    function handleSaveRoles(){
        //ToDo - save the roles to the Machine schema
        alert("Roles have been saved")
    }

    function handleSetResults(machine, user){
        let newObj ={}
        newObj[machine] = user
        setResults([...results, newObj])
    }

    
    return (
        <>
            <button onClick={()=>console.log(results)}>test</button>

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
                            <td><UserDropDown machine={name} setResults={handleSetResults}/></td>
                        </tr>
                        )
                    })}

                    
                </table>
                <button onClick={()=>{handleSaveRoles()}}>Save</button>



                {/* This is just to visualise the schedule */}
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
